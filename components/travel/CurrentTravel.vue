<template>
  <div>
    <h2>Current Travel Status</h2>
    <p v-if="currentTravel">
      Currently in {{ currentTravel.city }}, {{ currentTravel.country }}.
      Arrived on {{ currentTravel.arrivalDate }} at {{ currentTravel.arrivalTime }}.
      Planning to leave on {{ currentTravel.departureDate }} at {{ currentTravel.departureTime }}.
      Reason for travel: {{ currentTravel.reasonForTravel }}.
      Accommodation: {{ currentTravel.accommodationType }} - {{ currentTravel.accommodationName }}.
      Flight: {{ currentTravel.doYouFly ? 'Yes' : 'No' }}.
      {{ currentTravel.doYouFly ? 'Flight cost: $' + currentTravel.flightCost : '' }}
    </p>
    <p v-else>No current travel plans.</p>

    <!-- Use the WeatherInfo component -->
    <WeatherInfo v-if="currentTravel" :city="currentTravel.city" :country="currentTravel.country" />
  </div>
</template>

<script>
import WeatherInfo from './WeatherInfo.vue';
import travelData from '@/json/travelData.json';

export default {
  components: {
    WeatherInfo,
  },
  data() {
    return {
      currentTravel: null,
    };
  },
  created() {
    this.getCurrentTravelStatus();
  },
  methods: {
    getCurrentTravelStatus() {
      const currentDate = new Date().toISOString().split('T')[0];
      const matchingTravel = travelData.travels.find((travel) => {
        return currentDate >= travel.arrivalDate && currentDate <= travel.departureDate;
      });

      if (matchingTravel) {
        this.currentTravel = matchingTravel;
      }
    },
  },
};
</script>
