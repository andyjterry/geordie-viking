<template>
  <div>
    <h2>Upcoming Trips</h2>
    <div v-if="upcomingTrips.length > 0">
      <ul>
        <li v-for="trip in upcomingTrips" :key="trip.id">
          <h3>{{ trip.city }}, {{ trip.country }}</h3>
          <p>Arrival Date: {{ trip.arrivalDate }}</p>
          <p>Departure Date: {{ trip.departureDate }}</p>
          <!-- Remove the duration calculation as the function is no longer available -->
          <!-- Add other trip details here -->
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
      const currentDate = new Date().toISOString().split('T')[0];
      this.upcomingTrips = travelData.travels.filter((trip) => {
        return trip.arrivalDate > currentDate;
      });
    },
  },
};
</script>
