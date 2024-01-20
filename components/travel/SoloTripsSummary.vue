<template>
  <div>
    <h2>Solo Trips Summary</h2>
    <p>Total Solo Trips: {{ stats.totalSoloTrips }}</p>
    <p>Total Solo Trips: {{ stats }}</p>
    <!-- Other statistics here -->
  </div>
</template>

<script>
import travelData from '@/json/travelData.json';
import { calculateTravelStatistics } from '@/utils/travelUtils.js'; // Adjust the path accordingly


export default {
  data() {
    return {
      stats: {},
    };
  },
  created() {
    this.stats = calculateTravelStatistics(travelData);
  },
};
</script>
