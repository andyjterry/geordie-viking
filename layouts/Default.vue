<template>
  <div>
    <Navigation />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Navigation from 'components/navigation/Navigation.vue'
import Footer from '@/components/Footer.vue'
</script>
