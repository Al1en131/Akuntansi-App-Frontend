<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="md:flex md:justify-between max-lg:mb-8 gap-7 items-center"
      :class="{
        'flex-row-reverse': index % 2 !== 0,
      }"
    >
      <img
        :src="item.image"
        class="rounded-lg w-[836px] max-lg:w-screen max-lg:mb-2 h-[630px] max-lg:h-[250px]"
        :alt="item.title"
      />
      <div class="gap-6 block space-y-6 max-lg:space-y-3">
        <h2
          class="text-primary max-lg:text-center text-5xl font-bold max-lg:text-2xl"
        >
          {{ item.title }}
        </h2>
        <p
          class="text-[#45434D] max-lg:text-balance max-lg:text-justify text-2xl max-lg:text-lg"
        >
          {{ item.description }}
        </p>
        <div class="max-lg:flex max-lg:justify-center">
          <a
            :href="item.link"
            class="bg-secondary px-6 w-[330px] flex rounded-xl max-lg:px-3 py-3 justify-between items-center text-2xl max-lg:text-base max-lg:w-[210px] text-white"
          >
            Whatsapp Sekarang
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
            >
              <path
                d="M11.24 8.05615L18.44 15.2562L11.24 22.4562"
                stroke="white"
                stroke-width="1.728"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
