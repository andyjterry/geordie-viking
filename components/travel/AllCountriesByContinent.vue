<template>
  <div>
    <h2>All Countries by Continent</h2>
    <p>Total Countries Visited: {{ totalCountriesVisited }}</p>
    <p>Total Countries Not Visited: {{ totalCountriesNotVisited }}</p>
    <p>You have visited {{ percentageVisited }}% of all countries.</p>

    <h3>Continents</h3>
    <ul>
      <li v-for="(countries, continent) in continents" :key="continent">
        <strong>{{ continent }}</strong>
        <ul>
          <li v-for="country in countries" :key="country">{{ country }}</li>
        </ul>
      </li>
    </ul>

    <h3>Visited Countries</h3>
    <ul>
      <li v-for="(trips, country) in sortedGroupedTrips" :key="country">
        <strong>{{ country }}</strong>
        <ul>
          <li v-for="trip in trips" :key="trip.city">
            {{ trip.city }}, {{ formatDate(trip.arrivalDate) }}
          </li>
        </ul>
      </li>
    </ul>

    <h3>Countries Not Visited</h3>
    <ul>
      <li v-for="country in notVisitedList" :key="country">{{ country }}</li>
    </ul>
  </div>
</template>

<script>
import allCountriesData from '@/json/allCountries.json';

export default {
  computed: {
    totalCountriesVisited() {
      const uniqueVisitedCountries = [...new Set(allCountriesData.travels.map(trip => trip.country))];
      return uniqueVisitedCountries.length;
    },
    totalCountriesNotVisited() {
      return allCountriesData.continents.total.length - this.totalCountriesVisited;
    },
    percentageVisited() {
      const uniqueVisitedCountries = [...new Set(allCountriesData.travels.map(trip => trip.country))];
      return ((uniqueVisitedCountries.length / allCountriesData.continents.total.length) * 100).toFixed(2);
    },
    continents() {
      return allCountriesData.continents;
    },
    groupedTrips() {
      const visitedTrips = allCountriesData.travels;
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
    notVisitedList() {
      const visitedCountriesSet = new Set();

      allCountriesData.travels.forEach(trip => {
        visitedCountriesSet.add(trip.country);
      });

      const notVisitedCountries = allCountriesData.continents.total.filter(country => !visitedCountriesSet.has(country));
      return notVisitedCountries;
    },
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
};
</script>
