<template>
  <div>
    <h1>Positive Quotes</h1>
    <div>
      <p>{{ currentQuote.quote }}</p>
      <p>- {{ currentQuote.author }}{{ currentQuote.year ? `, ${currentQuote.year}` : '' }}</p>
    </div>
  </div>
</template>

<script>
import quotesData from '@/json/quotes.json';

export default {
  data() {
    return {
      quotes: quotesData.quotes,
      currentQuoteIndex: 0,
    };
  },
  computed: {
    currentQuote() {
      return this.quotes[this.currentQuoteIndex];
    },
  },
  created() {
    // Select a random quote index when the component is created
    this.currentQuoteIndex = this.getRandomQuoteIndex();
  },
  methods: {
    getRandomQuoteIndex() {
      // Generate a random index within the range of the quotes array
      return Math.floor(Math.random() * this.quotes.length);
    },
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
