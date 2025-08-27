<script setup>
import OddCard from "@/components/OddCard.vue";
import PricesCard from "../components/PriceCard.vue";
import PricesCardResponsive from "../components/PriceCardResponsive.vue";
import { ref } from "vue";

const activeButton = ref("tahun");
</script>
<template>
  <div class="flex justify-center w-full">
    <div class="py-28 max-lg:py-8 w-full">
      <div class="text-center px-28 max-lg:px-8 space-y-16 max-lg:space-y-5">
        <div class="space-y-8">
          <h1 class="text-primary text-5xl font-bold max-lg:text-2xl relative">
            Raih Software Akuntansi Terbaik
            <span class="relative inline-block">
              Dengan Mudah
              <span
                class="absolute inset-7 max-lg:hidden -z-10 bg-[#FFC055] h-6 w-[365px] left-1/2 -translate-x-1/2 rounded-sm"
              ></span>
            </span>
          </h1>
          <div class="flex justify-center">
            <p
              class="text-2xl text-[#45434D] max-lg:text-lg w-[1280px] max-lg:w-full"
            >
              Semua kebutuhan Anda, mulai dari invoicing, purchasing, inventori,
              dan manajemen aset tetap, hingga laporan akuntansi dan analisis
              bisnis, tersedia di satu tempat
            </p>
          </div>
        </div>
        <div
          class="flex items-center justify-center max-lg:text-base max-lg:w-[230px] text-xl font-semibold mx-auto w-[330px] bg-gray-200 rounded-full"
        >
          <button
            @click="activeButton = 'tahun'"
            :class="{
              'bg-[#F44336] text-white': activeButton === 'tahun',
              'bg-transparent text-gray-700': activeButton !== 'tahun',
            }"
            class="px-12 py-4 max-lg:px-7 rounded-full transition"
          >
            Tahunan
          </button>
          <button
            @click="activeButton = 'bulan'"
            :class="{
              'bg-primary text-white': activeButton === 'bulan',
              'bg-transparent text-gray-700': activeButton !== 'bulan',
            }"
            class="px-12 py-4 max-lg:px-7 rounded-full transition"
          >
            Bulanan
          </button>
        </div>
      </div>
      <div
        class="flex gap-10 px-28 mt-16 max-lg:hidden items-stretch max-lg:py-4"
      >
        <PricesCard :activeBillingCycle="activeButton" />
      </div>
      <div class="items-stretch hidden max-lg:block max-lg:py-4">
        <PricesCardResponsive :activeBillingCycle="activeButton" />
      </div>
    </div>
  </div>
  <div class="py-20 space-y-20 px-28 max-lg:py-6 max-lg:space-y-6 max-lg:px-8">
    <div class="space-y-8 max-lg:space-y-4 justify-center text-center">
      <h1 class="text-primary text-5xl font-semibold max-lg:text-2xl">
        Add Ons
      </h1>
      <div class="flex justify-center">
        <p
          class="text-2xl text-[#45434D] w-[1293px] max-lg:text-lg max-lg:w-full"
        >
          Sempurnakan akun Anda dengan fitur dan fungsionalitas tambahan sesuai
          kebutuhan untuk mendukung kemudahan dalam bisnis Anda
        </p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-6 max-lg:grid-cols-1 items-stretch w-full">
      <OddCard />
    </div>
  </div>
</template>
