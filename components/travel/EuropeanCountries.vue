<template>
  <div>
    <h2>European Countries</h2>
    <p>Total European Countries Visited: {{ totalEuropeanCountriesVisited }}</p>
    <p>Total European Countries Not Visited: {{ totalEuropeanCountriesNotVisited }}</p>
    <p>You have visited {{ percentageVisited }}% of European countries.</p>
    <h3>Visited European Countries</h3>
    <div class="grid grid-cols-2 gap-4">
      <div v-for="(trips, country) in sortedGroupedTrips" :key="country">
        <div class="bg-white p-4 rounded shadow relative">
          <!-- Add flag image -->
          <img
              v-if="flagImages[country]"
              :src="flagImages[country]"
              alt="Country Flag"
              class="absolute top-2 right-2 w-8 h-8"
          />
          <h4 class="font-bold">{{ country }}</h4>
          <div class="absolute top-2 right-16 bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
            {{ trips.length }} Visits
          </div>
          <ul>
            <li v-for="trip in trips" :key="trip.city">
              {{ trip.city }}, {{ formatDate(trip.arrivalDate) }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <h3>European Countries Not Visited</h3>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="country in europeanNotVisitedList" :key="country">
        <div class="bg-white p-4 rounded shadow">
          {{ country }}
        </div>
      </div>
    </div>

    <h2>Trips Outside Europe</h2>
    <div v-for="(continentData, continent) in tripsOutsideEurope" :key="continent">
      <h3>{{ continent }}</h3>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="countryData in continentData" :key="countryData.country">
          <div class="bg-white p-4 rounded shadow">
            <h4 class="font-bold">{{ countryData.country }}</h4>
            <ul>
              <li v-for="trip in countryData.trips" :key="trip.city">
                {{ trip.city }}, {{ formatDate(trip.arrivalDate) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import allCountriesData from '@/json/allCountries.json';
import travelData from '@/json/travelData.json';

export default {
  data() {
    return {
      flagImages: {},
    };
  },
  computed: {
    totalEuropeanCountriesVisited() {
      const europeanCountries = allCountriesData.continents.Europe;
      const visitedEuropeanCountries = travelData.travels
          .filter(trip => europeanCountries.includes(trip.country) || trip.country === 'Wales' || trip.country === 'Scotland');
      const uniqueVisitedCountries = [...new Set(visitedEuropeanCountries.map(trip => trip.country))];
      return uniqueVisitedCountries.length;
    },
    totalEuropeanCountriesNotVisited() {
      const europeanCountries = allCountriesData.continents.Europe;
      const totalEuropeanCountries = europeanCountries.length + 2; // Adding 2 for Wales and Scotland
      return totalEuropeanCountries - this.totalEuropeanCountriesVisited;
    },
    percentageVisited() {
      const europeanCountries = allCountriesData.continents.Europe;
      const visitedEuropeanCountries = travelData.travels
          .filter(trip => europeanCountries.includes(trip.country) || trip.country === 'Wales' || trip.country === 'Scotland');
      const uniqueVisitedCountries = [...new Set(visitedEuropeanCountries.map(trip => trip.country))];
      return ((uniqueVisitedCountries.length / (europeanCountries.length + 2)) * 100).toFixed(2);
    },
    groupedTrips() {
      const europeanCountries = allCountriesData.continents.Europe;
      const visitedTrips = travelData.travels
          .filter(trip => europeanCountries.includes(trip.country) || trip.country === 'Wales' || trip.country === 'Scotland');
      const grouped = {};

      visitedTrips.forEach(trip => {
        if (!grouped[trip.country]) {
          grouped[trip.country] = [];
        }
        grouped[trip.country].push(trip);
      });

      return grouped;
    },
    sortedGroupedTrips() {
      const grouped = this.groupedTrips;
      // Sort the countries based on the number of trips in descending order
      const sortedCountries = Object.keys(grouped).sort((a, b) => grouped[b].length - grouped[a].length);
      const sortedGrouped = {};

      sortedCountries.forEach(country => {
        sortedGrouped[country] = grouped[country];
      });

      return sortedGrouped;
    },
    europeanNotVisitedList() {
      const europeanCountries = allCountriesData.continents.Europe;
      const visitedCountriesSet = new Set();

      travelData.travels.forEach(trip => {
        if (europeanCountries.includes(trip.country) || trip.country === 'Wales' || trip.country === 'Scotland') {
          visitedCountriesSet.add(trip.country);
        }
      });

      const notVisitedCountries = europeanCountries.filter(country => !visitedCountriesSet.has(country));
      return notVisitedCountries;
    },
    tripsOutsideEurope() {
      const europeanCountries = allCountriesData.continents.Europe;
      const tripsOutsideEurope = {};

      travelData.travels.forEach((trip) => {
        if (!europeanCountries.includes(trip.country) && trip.country !== 'Wales' && trip.country !== 'Scotland') {
          const continent = this.getContinent(trip.country);
          if (!tripsOutsideEurope[continent]) {
            tripsOutsideEurope[continent] = [];
          }

          const countryData = tripsOutsideEurope[continent].find(
              (countryData) => countryData.country === trip.country
          );

          if (!countryData) {
            tripsOutsideEurope[continent].push({
              country: trip.country,
              trips: [trip],
            });
          } else {
            countryData.trips.push(trip);
          }
        }
      });

      return tripsOutsideEurope;
    },
  },
  methods: {
    async getFlagImage(country) {
      try {
        // Use dynamic import to load the flag image
        const flagImage = await import(`@/assets/images/flags/${country.toLowerCase()}.png`);
        return flagImage.default;
      } catch (error) {
        // Handle the case where the image doesn't exist
        console.error(`Flag image for ${country} not found.`);
        return null;
      }
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    getContinent(country) {
      for (const continent in allCountriesData.continents) {
        if (allCountriesData.continents[continent].includes(country)) {
          return continent;
        }
      }
      return 'Other';
    },
  },
};
</script>
