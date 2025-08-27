<template>
  <div class="py-28 max-lg:py-4">
    <div class="">
      <div class="block px-28 max-lg:px-8 text-center pb-28 max-lg:pb-8">
        <h1
          class="text-primary font-bold text-5xl max-lg:text-3xl max-lg:mb-4 mb-10"
        >
          Platform Terpadu untuk
          <span class="relative inline-block">
            Akuntansi dan Penggajian
            <span
              class="absolute inset-7 -z-10 bg-[#FFC055] h-6 max-lg:hidden left-1/2 w-[620px] -translate-x-1/2 rounded-sm"
            ></span>
          </span>
          yang Efisien
        </h1>
        <p class="text-[#45434D] text-3xl mb-20 max-lg:mb-4 max-lg:text-xl">
          Solusi ini menyatukan proses akuntansi dan penggajian dalam satu
          platform yang efisien. Mengurangi pekerjaan manual dan meningkatkan
          akurasi dengan fitur otomatisasi yang terintegrasi.
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
    title: "Pengelolaan Payroll yang Lebih Mudah",
    description:
      "Fitur ini memudahkan pencatatan dan pengelolaan payroll dengan proses yang lebih terstruktur. Anda dapat mengelola data gaji karyawan secara efisien dan mengurangi kesalahan manual. Sistem otomatis memastikan perhitungan yang akurat dan tepat waktu. Ini membantu Anda mengelola administrasi payroll dengan lebih sederhana.",
    link: "https://wa.me/123456789",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Pencatatan PPh Karyawan Secara Otomatis",
    description:
      "Fitur ini secara otomatis mencatat dan menghitung PPh karyawan sesuai dengan peraturan perpajakan. Mengurangi risiko kesalahan dan memastikan kepatuhan pajak yang tepat. Data PPh karyawan terintegrasi dengan sistem payroll untuk kemudahan pelaporan. Memudahkan administrasi pajak dan pengelolaan kewajiban perpajakan.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Perhitungan BPJS Terintegrasi",
    description:
      "Fitur ini mengintegrasikan perhitungan BPJS dengan sistem penggajian Anda secara otomatis. Menghitung kontribusi BPJS untuk karyawan dengan akurat dan efisien, mengurangi pekerjaan manual. Data BPJS terhubung langsung dengan laporan payroll untuk kemudahan administrasi. Memastikan kepatuhan terhadap peraturan BPJS dan mempermudah pengelolaan.",
    link: "https://wa.me/987654321",
  },
];
const activeButton = ref("tahun");
</script>
