<template>
  <div>
    <h3>Weather in {{ city }}, {{ country }}</h3>
    <div v-if="weatherData">
      <p>Temperature: {{ weatherData.temperature }}°C</p>
      <p>Weather: {{ weatherData.description }}</p>
      <img :src="weatherIconUrl" :alt="weatherData.description" />
    </div>
    <p v-else>Loading weather data...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    city: String,
    country: String,
  },
  data() {
    return {
      weatherData: null,
    };
  },
  computed: {
    weatherIconUrl() {
      // Get the icon code from the weather data, e.g., "10d"
      const iconCode = this.weatherData ? this.weatherData.icon : '';
      // Construct the URL for the weather icon using the code
      return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    },
  },
  created() {
    this.fetchWeatherData();
  },
  methods: {
    fetchWeatherData() {
      const apiKey = '88dae8ac2a4c779496418907fd42720b';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${apiKey}`;

      axios
          .get(apiUrl)
          .then((response) => {
            this.weatherData = {
              temperature: response.data.main.temp,
              description: response.data.weather[0].description,
              icon: response.data.weather[0].icon,
            };
          })
          .catch((error) => {
            console.error('Error fetching weather data:', error);
          });
    },
  },
};
</script>

<style scoped>
/* Add any additional styles you want for the weather icon here */
</style>
