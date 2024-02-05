<template>
  <header class="bg-dark">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Geordie Viking</span>
          <img class="h-40 w-auto" src="@/assets/images/logo/logo.png" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <NavigationItem label="Travel" to="/travel" />
        <NavigationItem label="Mindset" to="/mindset" />
        <PopoverNavigationItem label="Articles" :items="articles" />
        <PopoverNavigationItem label="Solo Vikings" :items="soloVikings" />
      </PopoverGroup>

      <current-travel-menu />
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="p-6">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Geordie Viking</span>
              <img
                class="h-8 w-auto"
                src="@/assets/images/logo/logo.png"
                alt=""
              />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in articles"
                  :key="item.name"
                  :href="item.href"
                  class="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  <div
                    class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  {{ item.name }}
                </a>
              </div>
              <div class="space-y-2 py-6">
                <a
                  href="/travel"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Travel</a
                >
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Mindset</a
                >

                <a
                  v-for="item in soloVikings"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Contact</a
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center"
        >
          <a
            v-for="item in callsToAction"
            :key="item.name"
            :href="item.href"
            class="p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
            >{{ item.name }}</a
          >
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import CurrentTravelMenu from "../components/travel/CurrentTravelMenu.vue";
import PopoverNavigationItem from '../components/navigationUI/PopoverNavigationItem.vue';
import NavigationItem from '../components/navigationUI/NavigationItem.vue';
import { ref } from 'vue';
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/vue/20/solid';
import WeatherInfo from "../travel/WeatherInfo.vue";

const articles = [
  {
    name: 'Personal Growth',
    description: 'Discover tips and insights for personal development',
    href: '#',
    icon: SquaresPlusIcon,
    postCount: 14,
  },
  {
    name: 'Confidence Building',
    description: 'Boost your self-confidence and overcome challenges',
    href: '#',
    icon: SquaresPlusIcon,
    postCount: 4,
  },
  {
    name: 'Adventure Travel',
    description: 'Explore the world through solo travel adventures',
    href: '#',
    icon: SquaresPlusIcon,
    postCount: 24,
  },
  {
    name: 'Mindset Mastery',
    description: 'Learn strategies to master your mindset and achieve goals',
    href: '#',
    icon: SquaresPlusIcon,
    postCount: 3,
  },
  {
    name: 'Health and Wellness',
    description: 'Discover tips for a healthy lifestyle and well-being',
    href: '#',
    icon: SquaresPlusIcon,
    postCount: 1,
  },
  {
    name: 'Be Inspired',
    description: 'A curation of inspiring stories and quotes',
    href: '#',
    icon: SquaresPlusIcon,
    postCount: 0,
  },
];
const recommends = [
  {
    name: 'Beard Barber',
    description: 'Get a fresh beard trim and styling',
    href: '#',
    icon: 'BeardIcon',
  },
  {
    name: 'Wellness Spa',
    description: 'Relax and rejuvenate with spa treatments',
    href: '#',
    icon: 'SpaIcon',
  },
  {
    name: 'Local Massages',
    description: 'Discover local masseuses for a soothing massage',
    href: '#',
    icon: 'MassageIcon',
  },
  {
    name: 'Product Recommendations',
    description: 'Explore recommended products for self-care',
    href: '#',
    icon: 'ProductIcon',
  },
  {
    name: 'Fitness Workshops',
    description: 'Join fitness workshops and classes',
    href: '#',
    icon: 'FitnessIcon',
  },
];
const callsToAction = [
  // { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  // { name: 'Contact sales', href: '#', icon: PhoneIcon },
];
const soloVikings = [
  {
    name: 'About Us',
    href: '#',
    description:
      'Learn more about our community values and mission to empower others, with a major "No Dickhead" Policy',
  },
  {
    name: 'Solo Vikings',
    href: '#',
    description:
      'Discover who the Solo Vikings are and join our soloVikings of adventurers',
  },
  {
    name: 'Future Trips',
    href: '#',
    description: 'Explore upcoming solo travel trips abroad as a group',
  },
  {
    name: 'Support',
    href: '#',
    description:
      'Are you struggling with anything, we are here to help you on your journey',
  },
];

const mobileMenuOpen = ref(false);

components: {
  CurrentTravelMenu
}
</script>
