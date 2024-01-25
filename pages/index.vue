  <template>
    <div>
      <navigation/>

<!--      <h1>Geordie Viking</h1>-->
<!--      <current-travel/>-->
<!--      <upcoming-trips/>-->
<!--      <travel-solo-trips-summary/>-->
<!--    <inspire-quotes/>-->
      <european-countries/>

  <!--    <all-countries-by-continent/>-->
      <test-component/>
    </div>
  </template>

  <script>


  import CurrentTravel from "../components/travel/CurrentTravel.vue";
  import UpcomingTrips from "../components/travel/UpcomingTrips.vue";
  import EuropeanCountries from "../components/travel/EuropeanCountries.vue";
  import AllCountriesByContinent from "../components/travel/AllCountriesByContinent.vue";
  import TestComponent from "../components/navigation/TestComponent.vue";

  export default {
    name: 'index',
    // component options here
    components: {
      AllCountriesByContinent,
      EuropeanCountries,
      UpcomingTrips,
      CurrentTravel,
      TestComponent
    },
  };
  </script>
