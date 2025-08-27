<template>
  <div class="py-28 max-lg:py-4">
    <div class="">
      <div class="block px-28 max-lg:px-8 text-center pb-28 max-lg:pb-8">
        <h1
          class="text-primary font-bold text-5xl max-lg:text-3xl max-lg:mb-4 mb-10"
        >
          Optimalkan Bisnis Anda dengan
          <span class="relative inline-block">
            Core POS
            <span
              class="absolute inset-7 -z-10 bg-[#FFC055] h-6 max-lg:hidden left-1/2 w-[220px] -translate-x-1/2 rounded-sm"
            ></span>
          </span>
          yang Fleksibel
        </h1>
        <p class="text-[#45434D] text-3xl mb-20 max-lg:mb-4 max-lg:text-xl">
          Core POS menawarkan solusi kasir yang dapat disesuaikan untuk
          mengoptimalkan setiap aspek bisnis Anda. Nikmati kemudahan dalam
          transaksi dan pengelolaan inventaris dengan fleksibilitas maksimal.
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
      <div class="space-y-20 px-28 mb-16 max-lg:px-8">
        <FiturContent :items="featureItems" />
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
  </div>
</template>
<script setup>
import FiturContent from "../../../components/FeatureContent.vue";
import PricesCard from "@/components/PriceCard.vue";
import PricesCardResponsive from "@/components/PriceCardResponsive.vue";
import FeatureAd from "@/components/FeatureAd.vue";
import { ref } from "vue";

const featureItems = [
  {
    image: "../../../assets/fitur.png",
    title: "Penjualan Fleksibel di Mana Saja",
    description:
      "Dengan fitur ini, Anda dapat melakukan penjualan dari mana saja, menggunakan perangkat mobile atau tablet. Ini memungkinkan Anda untuk mengelola transaksi secara efisien, baik di lokasi toko maupun saat bertemu pelanggan di luar lokasi. Mempermudah pengelolaan penjualan dan meningkatkan fleksibilitas operasional. Menyediakan kemudahan akses dan kontrol yang lebih baik dalam berbagai situasi.",
    link: "https://wa.me/123456789",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Manajemen Bisnis Secara Real-Time",
    description:
      "Kelola bisnis Anda dengan kontrol penuh secara real-time melalui platform kami. Fitur ini memungkinkan Anda memantau dan mengelola semua aspek bisnis dari satu tempat, dengan data yang selalu terupdate. Anda dapat membuat keputusan cepat dan tepat berdasarkan informasi terkini. Mengoptimalkan operasi bisnis dengan visibilitas dan responsivitas yang tinggi.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Beragam Pilihan Pembayaran untuk Pelanggan",
    description:
      "Terima berbagai jenis pembayaran, dari kartu kredit hingga pembayaran digital, dengan sistem kami yang terintegrasi. Ini memberikan kemudahan bagi pelanggan untuk memilih metode pembayaran yang paling nyaman bagi mereka. Fitur ini meningkatkan kepuasan pelanggan dan mempercepat proses transaksi. Menyediakan fleksibilitas dalam pengelolaan pembayaran untuk memenuhi berbagai preferensi pelanggan.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Kelola Bisnis dengan Data Real-Time",
    description:
      "Fitur ini memungkinkan Anda mengelola bisnis dengan data yang selalu diperbarui secara real-time. Anda dapat memantau kinerja, inventaris, dan transaksi dari satu platform terintegrasi. Dengan informasi yang akurat dan terkini, Anda dapat membuat keputusan yang lebih baik dan merespons perubahan dengan cepat. Mengoptimalkan efisiensi operasional dan pengambilan keputusan berbasis data.",
    link: "https://wa.me/987654321",
  },
];
const activeButton = ref("tahun");
</script>
