<template>
  <div>
    <p>Your current activity: {{ currentActivity }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentActivity: '',
    };
  },
  created() {
    this.updateCurrentActivity();
    // Update the current activity every minute (adjust the interval as needed)
    setInterval(this.updateCurrentActivity, 60000);
  },
  methods: {
    updateCurrentActivity() {
      const now = new Date();
      const dayOfWeek = now.getDay(); // 0 (Sunday) - 6 (Saturday)
      const hour = now.getHours();
      const minute = now.getMinutes();

      if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 8 && hour < 16) {
        this.currentActivity = 'Working';
        if ((dayOfWeek === 5 || dayOfWeek === 4) && hour === 14 && minute >= 30 && hour < 15) {
          this.currentActivity += ' and Coffee';
        }
        if ((dayOfWeek === 4 || dayOfWeek === 5) && hour === 15 && minute >= 0 && minute < 25) {
          this.currentActivity = 'School Run';
        }
      } else if (hour >= 23 || (hour >= 0 && hour < 6)) {
        this.currentActivity = 'Sleeping';
      } else if (hour === 6 && minute >= 30 && hour < 7 && dayOfWeek >= 1 && dayOfWeek <= 7) {
        this.currentActivity = 'Gym';
      } else {
        this.currentActivity = 'Something else'; // Default activity
      }
    },
  },
};
</script>
