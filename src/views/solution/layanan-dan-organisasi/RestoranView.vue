<script setup>
import PricesCard from "@/components/PriceCard.vue";
import PricesCardResponsive from "@/components/PriceCardResponsive.vue";
import FeatureAd from "@/components/FeatureAd.vue";
import { ref } from "vue";
import ProblemCard from "@/components/ProblemCard.vue";
import SolutionCard from "@/components/SolutionCard.vue";

const cardsData = [
  {
    subtitle: "Masalah Umum Restoran",
    problem: "Food Cost",
    image: "/../../assets/problem.png",
    alt: "problem",
    cardTitle: "Tantangan Perhitungan Food Cost di Restoran",
    description:
      "Kesalahan dalam perhitungan food cost dapat merugikan profit. Sistem yang tepat membantu memastikan perhitungan food cost yang akurat.",
  },
  {
    subtitle: "Masalah Umum Restoran",
    problem: "Pencatatan",
    image: "/../../assets/problem-2.png",
    alt: "problem",
    cardTitle: "Masalah Pencatatan Bahan Baku di Restoran",
    description:
      "Pencatatan bahan baku yang tidak rapi dapat menyebabkan pemborosan. Pengelolaan stok yang teratur memastikan efisiensi operasional.",
  },
  {
    subtitle: "Masalah Umum Restoran",
    problem: "Laporan Keuangan",
    image: "/../../assets/problem-3.png",
    alt: "problem",
    cardTitle: "Kesulitan Membuat Laporan Keuangan di Restoran",
    description:
      "Laporan keuangan yang tidak jelas membuat sulit mengukur kinerja. Sistem otomatis membantu menyusun laporan mudah dipahami.",
  },
];
const activeButton = ref("tahun");
</script>
<template>
  <div class="py-28 max-lg:py-8">
    <div class="block px-28 max-lg:px-8 text-center pb-28 max-lg:pb-8">
      <h1
        class="text-primary font-bold text-5xl max-lg:text-3xl max-lg:mb-4 mb-10"
      >
        Sederhanakan Pengelolaan
        <span class="relative inline-block">
          Keuangan Restoran
          <span
            class="absolute inset-7 -z-10 bg-[#FFC055] h-6 max-lg:hidden left-1/2 w-[470px] -translate-x-1/2 rounded-sm"
          ></span>
        </span>
        Anda dengan Software Akuntansi Core Jurnal
      </h1>
      <p class="text-[#45434D] text-3xl mb-20 max-lg:mb-4 max-lg:text-xl">
        Software akuntansi Kledo mempermudah pengelolaan keuangan restoran Anda
        dengan fitur otomatis efisien. Sederhanakan pencatatan transaksi dan
        laporan keuangan untuk fokus pada pertumbuhan bisnis Anda.
      </p>
      <div class="flex justify-center">
        <a
          href=""
          class="bg-[#F44336] px-6 max-lg:px-4 w-[358.28px] max-lg:w-[230px] flex rounded-xl py-3 justify-between items-center text-2xl max-lg:text-base text-white"
          >Coba Gratis Sekarang
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
    <div
      class="md:flex md:justify-between px-28 gap-7 max-lg:space-y-4 max-lg:px-8 py-20 max-lg:py-5 items-center"
    >
      <div>
        <h2
          class="text-4xl max-lg:text-2xl mb-10 max-lg:mb-5 max-lg:text-center font-semibold text-primary"
        >
          Rahasianya di Sini! Cara Mudah Kelola Keuangan Restoran dengan Core
          Jurnal!
        </h2>
        <div class="max-lg:text-center max-lg:flex max-lg:justify-center">
          <a
            href=""
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
      <img
        src="/assets/fitur.png"
        class="h-[630px] max-lg:h-[250px] w-[836px] max-lg:w-screen"
        alt=""
      />
    </div>
    <div
      class="py-20 max-lg:py-5 space-y-24 max-lg:space-y-6 px-28 max-lg:px-8"
    >
      <div class="text-center space-y-6 max-lg:space-y-3">
        <h1 class="text-5xl max-lg:text-2xl text-primary font-semibold">
          Masalah Umum dalam Keuangan Restoran
        </h1>
        <p class="text-2xl max-lg:text-lg text-[#45434D]">
          Banyak restoran menghadapi masalah akuntansi seperti pencatatan manual
          yang rumit dan laporan keuangan yang membingungkan. Jangan biarkan
          masalah ini menghambat bisnis Anda, segera temukan solusinya sebelum
          terlambat!
        </p>
      </div>
      <div class="md:flex md:justify-between items-center">
        <ProblemCard :cards="cardsData" />
      </div>
    </div>
    <div class="py-20 max-lg:py-5 px-28 max-lg:px-8">
      <div class="flex justify-center">
        <h1
          class="text-primary text-center font-semibold md:w-[1200px] md:leading-[67px] text-5xl mb-24 max-lg:mb-8 max-lg:text-2xl"
        >
          Bagaimana CoreJurnal Membantu Meningkatkan Bisnis Anda?
        </h1>
      </div>
      <div
        class="grid grid-cols-4 gap-4 max-lg:grid-cols-1 items-stretch w-full"
      >
        <SolutionCard />
      </div>
    </div>

    <div class="">
      <FeatureAd />
    </div>
    <div class="py-20 max-lg:py-6 space-y-20 max-lg:space-y-6 w-full">
      <div class="text-center px-28 max-lg:px-8 space-y-16 max-lg:space-y-5">
        <h1 class="text-primary text-5xl font-bold max-lg:text-2xl">
          Penawaran Harga Kami
        </h1>
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
      <div class="flex gap-10 px-28 max-lg:hidden items-stretch max-lg:py-4">
        <PricesCard :activeBillingCycle="activeButton" />
      </div>
      <div class="items-stretch hidden max-lg:block max-lg:py-4">
        <PricesCardResponsive :activeBillingCycle="activeButton" />
      </div>
      <div class="flex justify-center">
        <router-link
          to="/"
          class="text-primary text-3xl max-lg:text-base gap-4 font-semibold flex justify-between items-center"
          >Lihat Selengkapnya
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="38"
            viewBox="0 0 39 38"
            fill="none"
          >
            <path
              d="M14.6801 10.4077L24.0401 19.7677L14.6801 29.1277"
              stroke="#536DFE"
              stroke-width="2.2464"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>
