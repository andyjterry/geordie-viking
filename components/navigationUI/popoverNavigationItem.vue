<template>
  <Popover class="relative">
    <PopoverButton class="flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900">
      {{ label }}
      <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
    </PopoverButton>

    <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1">
      <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5">
        <div v-for="item in items" :key="item.name" class="relative rounded-lg p-4 hover:bg-gray-50">
          <a :href="item.href" class="block text-md font-semibold leading-6 text-gray-900">
            {{ item.name }}
            <span class="absolute inset-0" />
          </a>
          <p class="mt-1 text-sm leading-6 text-gray-600">{{ item.description }}</p>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';

defineProps({
  label: String,
  items: Array,
});
</script>
