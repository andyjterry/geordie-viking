<template>
  <div>
    <!-- Render DesktopMenu.vue when viewport is wide enough -->
    <desktop-menu v-if="isDesktop"></desktop-menu>

    <!-- Render MobileMenu.vue when viewport is narrow -->
    <mobile-menu v-else></mobile-menu>
  </div>
</template>

<script>
import DesktopMenu from './DesktopMenu.vue';
import MobileMenu from './MobileMenu.vue';

export default {
  components: {
    DesktopMenu,
    MobileMenu
  },
  data() {
    return {
      isDesktop: window.innerWidth >= 768 // Set your breakpoint here
    };
  },
  created() {
    // Add a resize event listener to update the view based on viewport width
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      // Update isDesktop based on viewport width
      this.isDesktop = window.innerWidth >= 768; // Update the breakpoint if needed
    }
  }
};
</script>
