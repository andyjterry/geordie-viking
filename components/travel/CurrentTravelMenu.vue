<template>
  <div class="flex lg:flex-1 flex-col lg:justify-end text-right text-xs">
    <div v-if="currentTravel">
      <p>
        Currently in {{ currentTravel.city }}, {{ currentTravel.country }}.
      </p>
      <p>
        Will return in {{ daysLeft }} Days
      </p>
      Keep up to date with my travels on <a class="font-bold text-red-500" :href="instagramLink">Instagram</a>
    </div>
    <div v-else></div>
  </div>
  <div></div>
</template>

<script>
import travelData from "@/json/travelData.json";

export default {
  data() {
    return {
      currentTravel: null,
    };
  },
  computed: {
    daysLeft() {
      if (this.currentTravel) {
        const departureDate = new Date(this.currentTravel.departureDate);
        const currentDate = new Date();
        const timeDifference = departureDate - currentDate;
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        return daysLeft;
      }
      return 0;
    },
    instagramLink() {
      return "https://bit.ly/geordievikinginsta"; // keeps track of the number of clicks
    },
  },
  created() {
    this.getCurrentTravelStatus();
  },
  methods: {
    getCurrentTravelStatus() {
      const currentDate = new Date().toISOString().split("T")[0];
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
