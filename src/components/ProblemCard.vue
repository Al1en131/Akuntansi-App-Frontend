<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="(item, index) in cards"
      :key="index"
      class="rounded-2xl border border-secondary relative"
    >
      <div class="absolute top-10 left-10 max-lg:left-5 max-lg:top-5 z-50">
        <p class="text-[#FFC055] text-xl max-lg:text-lg mb-2 z-50">{{ item.subtitle }}</p>
        <p class="text-white text-4xl max-lg:text-2xl font-semibold z-50">{{ item.problem }}</p>
      </div>
      <div
        class="h-[510px] max-lg:h-[200px] w-full rounded-t-2xl relative overflow-hidden"
        :style="{
          background: `linear-gradient(
        180deg,
        rgba(63, 81, 181, 0.6) 28.44%,
        rgba(0, 0, 0, 0) 99.97%
      ), lightgray 50% / cover no-repeat`,
        }"
      >
        <div
          :style="{
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
          class="absolute inset-0"
        ></div>
        <div
          class="absolute inset-0"
          style="background: linear-gradient(180deg, rgba(63, 81, 181, 0.6) 28.44%, rgba(0, 0, 0, 0) 99.97%)"
        ></div>
      </div>
      <div class="p-10 space-y-5 max-lg:space-y-2 max-lg:p-5">
        <p class="text-[#45434D] text-3xl max-lg:text-xl font-semibold">
          {{ item.cardTitle }}
        </p>
        <p class="text-xl max-lg:text-lg text-[#73727A]">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cards: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
