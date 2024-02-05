  <template>
    <div>
      <navigation/>
      <NotificationCurrentlyTravelling
          v-if="currentTravel"
          :currentTravel="currentTravel"
          :daysLeft="daysLeft"
          :instagramLink="instagramLink"
      />
      <hero-with-tiles/>
<!--      <h1>Geordie Viking</h1>-->
<!--      <current-travel/>-->
<!--      <upcoming-trips/>-->
<!--      <travel-solo-trips-summary/>-->
<!--    <inspire-quotes/>-->
<!--      <european-countries/>-->

  <!--    <all-countries-by-continent/>-->
<!--      <test-component/>-->
    </div>
  </template>

  <script>
  import CurrentTravel from "../components/travel/CurrentTravel.vue";
  import UpcomingTrips from "../components/travel/UpcomingTrips.vue";
  import EuropeanCountries from "../components/travel/EuropeanCountries.vue";
  import AllCountriesByContinent from "../components/travel/AllCountriesByContinent.vue";
  import TestComponent from "../components/navigation/TestComponent.vue";
  import NotificationCurrentlyTravelling from "@/components/ui/NotificationCurrentlyTravelling.vue";
  import travelData from "@/json/travelData.json";

  export default {
    name: 'IndexPage',
    // component options here
    components: {
      NotificationCurrentlyTravelling,
      AllCountriesByContinent,
      EuropeanCountries,
      UpcomingTrips,
      CurrentTravel,
      TestComponent,
    },
    data() {
      return {
        currentTravel: null
        // Your other data properties
      };
    },
    computed: {
      daysLeft() {
        if (this.currentTravel) {
          const departureDate = new Date(this.currentTravel.departureDate);
          const currentDate = new Date();
          return Math.ceil((departureDate - currentDate) / (1000 * 60 * 60 * 24));
        }
        return 0;
      },
      instagramLink() {
        return "https://www.instagram.com/geordieviking"; // Adjusted to a hypothetical Instagram link
      },
    },
    methods: {
      getCurrentTravelStatus() {
        const currentDate = new Date().toISOString().split("T")[0];
        return travelData.travels.find(travel => currentDate >= travel.arrivalDate && currentDate <= travel.departureDate) || null;
      },
    },
    mounted() {
      setTimeout(() => {
        this.$refs.notificationCurrentlyTravelling.show = true;
      }, 1000);
    }
  };
  </script>
