<template>
  <NuxtLink :to="to" class="text-md font-semibold leading-6 text-gray-900">
    {{ label }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  label: String,
  to: String,
});
</script>
