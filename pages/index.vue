<template>
  <div>
    <h1>Geordie Viking : Coming Soon</h1>
    <current-activity></current-activity>
  </div>
</template>

<script>
import CurrentActivity from '@/components/special/CurrentActivity.vue';

export default {
  name: 'index',
  // component options here
  components: {
    CurrentActivity, // Register the component for use in your template
  },
};
</script>
