<template>
  <div>
    <h1>Geordie Viking : Coming Soon</h1>
    <current-travel/>
    <upcoming-trips/>
    <travel-solo-trips-summary/>
<!--  <inspire-quotes/>-->
    <european-countries/>
<!--    <all-countries-by-continent/>-->
  </div>
</template>

<script>


import CurrentTravel from "../components/travel/CurrentTravel.vue";
import UpcomingTrips from "../components/travel/UpcomingTrips.vue";
import EuropeanCountries from "../components/travel/EuropeanCountries.vue";
import AllCountriesByContinent from "../components/travel/AllCountriesByContinent.vue";

export default {
  name: 'index',
  // component options here
  components: {
    AllCountriesByContinent,
    EuropeanCountries,
    UpcomingTrips,
    CurrentTravel

  },
};
</script>
