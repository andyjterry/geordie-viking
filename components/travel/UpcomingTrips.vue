<template>
  <div>
    <h2>Upcoming Trips</h2>
    <div v-if="upcomingTrips.length > 0">
      <ul>
        <li v-for="trip in upcomingTrips" :key="trip.id">
          <h3>{{ trip.city }}, {{ trip.country }}</h3>
          <p>Arrival Date: {{ formatDate(trip.arrivalDate) }}</p>
          <p>Departure Date: {{ formatDate(trip.departureDate) }}</p>
        </li>
      </ul>
    </div>
    <p v-else>No upcoming trips.</p>
  </div>
</template>

<script>
import travelData from '@/json/travelData.json';

export default {
  data() {
    return {
      upcomingTrips: [],
    };
  },
  created() {
    this.getUpcomingTrips();
  },
  methods: {
    getUpcomingTrips() {
      const currentDate = new Date();
      this.upcomingTrips = travelData.travels.filter((trip) => {
        const arrivalDate = new Date(trip.arrivalDate);
        const departureDate = new Date(trip.departureDate);
        return arrivalDate <= currentDate && departureDate >= currentDate;
      });
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
};
</script>
