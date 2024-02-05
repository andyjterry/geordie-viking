<template>
  <div class="bg-white">
    <main>
      <div class="relative isolate">
        <div class="overflow-hidden">
          <div class="mx-auto max-w-7xl px-6 pb-6 pt-6 sm:pt-0 lg:px-8 lg:pt-12">
            <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div class="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Helping you improve in confidence, exploration, and growth.</h1>
                <p class="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">Welcome, my name is Andy also known as the Geordie Viking, this is a sanctuary crafted by me for aspiring Solo Vikings seeking a life defined by newfound confidence, meaningful connections, and limitless exploration. In a world often filled with uncertainty and challenges, I'm here to be your guiding light on this transformative voyage. My mission is simple yet profound: to empower you to build in  confidence, forge deep connections, and embark on a lifelong adventure of self-discovery.

                  I'll be your fellow traveler, sharing my adventures, my moments of growth, the lessons I've learned, and yes, even the struggles. I believe in the power of honesty and authenticity. Whether you're taking your first steps toward personal growth or seeking inspiration to step outside your comfort zone, the Geordie Viking community, known as the Solo Vikings, is here to provide support, encouragement, and a shared journey. Together, we'll set sail toward a horizon of boundless possibilities and transformation.</p>
                <h3 class="mt-10 text-xl font-semibold text-gray-900">We are a work in progress</h3>
                <p class="mt-2 text-gray-600">
                  You might be wondering why we don't have much here yet. Well, I am currently traveling and working on developing this site when I can. As a software developer, I'm building this website from scratch, without the use of a CMS or WordPress. It may not take long, but you will notice changes on a daily basis as this website continues to develop.
                </p>
              </div>
              <div class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div class="relative">
                    <img src="@/assets/images/viking/viking-back.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div class="relative">
                    <img src="@/assets/images/viking/viking-beach.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div class="relative">
                    <img src="@/assets/images/viking/viking-hoody.webp" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div class="relative">
                    <img src="@/assets/images/viking/viking-coffee.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div class="relative">
                    <img src="@/assets/images/viking/viking-flight.jpeg" alt="" class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                    <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
</script>
