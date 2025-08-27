<template>
  <div class="py-28 max-lg:py-4">
    <div class="">
      <div class="block px-28 max-lg:px-8 text-center pb-28 max-lg:pb-8">
        <h1
          class="text-primary font-bold text-5xl max-lg:text-3xl max-lg:mb-4 mb-10"
        >
          Transformasi Proses Pembukuan Anda untuk
          <span class="relative inline-block">
            Akuntansi
            <span
              class="absolute inset-7 -z-10 bg-[#FFC055] h-6 w-[250px] max-lg:hidden left-1/2 -translate-x-1/2 rounded-sm"
            ></span>
          </span>
          yang Lebih Cepat dan Sederhana
        </h1>
        <p class="text-[#45434D] text-3xl mb-20 max-lg:mb-4 max-lg:text-xl">
          Transformasi proses pembukuan Anda dengan solusi kami untuk akuntansi
          yang lebih cepat dan sederhana. Nikmati efisiensi tinggi dan
          pengelolaan data keuangan yang lebih mudah dan akurat.
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
    title: "Pencatatan Pembukuan Otomatis",
    description:
      "Pembukuan otomatis memudahkan pencatatan dan pengelolaan transaksi tanpa perlu intervensi manual. Sistem ini mengurangi risiko kesalahan dan menghemat waktu dengan memperbarui data secara real-time. Fitur ini memastikan keakuratan laporan keuangan dan mempermudah pelacakan transaksi. Anda dapat fokus pada analisis tanpa khawatir tentang pembukuan yang rumit.",
    link: "https://wa.me/123456789",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Pencatatan Data Bisnis yang Praktis",
    description:
      "Fitur ini menyederhanakan pencatatan data bisnis dengan antarmuka yang user-friendly dan otomatisasi cerdas. Anda dapat dengan mudah menginput dan mengelola data transaksi tanpa kerepotan. Pembaruan data dilakukan secara otomatis, memastikan informasi selalu akurat dan terkini. Ini membantu meningkatkan efisiensi dan mengurangi waktu yang dihabiskan untuk administrasi.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Rekonsiliasi Bank Tanpa Ribet",
    description:
      "Rekonsiliasi bank otomatis memastikan bahwa transaksi bank dan catatan akuntansi Anda selalu selaras. Fitur ini mengidentifikasi dan menyelesaikan perbedaan secara otomatis, menghemat waktu dan mengurangi kemungkinan kesalahan. Dengan pembaruan real-time, Anda bisa memastikan semua data keuangan Anda akurat dan konsisten. Ini juga menyederhanakan proses audit dan verifikasi.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Laporan Keuangan ter-Update",
    description:
      "Dapatkan akses ke laporan keuangan secara real-time untuk wawasan yang up-to-date dan akurat. Fitur ini menyediakan data terkini tentang performa keuangan perusahaan, memungkinkan keputusan yang lebih cepat dan berbasis data. Laporan yang diperbarui secara otomatis memastikan Anda selalu mendapatkan informasi yang relevan. Ini membantu dalam perencanaan dan analisis keuangan yang lebih efektif.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Solusi Pembukuan untuk Pemula",
    description:
      "Sistem ini dirancang khusus agar mudah digunakan oleh pemula dalam akuntansi dan pembukuan. Dengan antarmuka yang sederhana dan panduan langkah-demi-langkah, Anda dapat mulai mengelola keuangan tanpa kesulitan. Fitur ini mengurangi kurva pembelajaran dan memudahkan pemula untuk langsung terlibat. Dukungan dan tutorial juga tersedia untuk memastikan transisi yang lancar.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Pengelolaan Multi Mata Uang",
    description:
      "Sistem ini mendukung pengelolaan transaksi dalam berbagai mata uang dengan konversi otomatis. Anda dapat memantau dan melaporkan keuangan dalam mata uang lokal atau internasional dengan mudah. Fitur ini menyederhanakan transaksi lintas negara dan mengurangi kerumitan pengelolaan mata uang. Semua konversi dan laporan dilakukan secara real-time untuk akurasi yang lebih baik.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Konsolidasi Data Anak Perusahaan",
    description:
      "Konsolidasi anak perusahaan memungkinkan Anda untuk mengelola dan menyatukan laporan keuangan dari berbagai entitas secara efisien. Sistem ini mengintegrasikan data dari berbagai sumber untuk memberikan gambaran yang jelas tentang kinerja keseluruhan. Fitur ini menyederhanakan proses pelaporan dan memudahkan analisis keuangan grup. Dengan konsolidasi otomatis, Anda dapat memantau kesehatan keuangan grup dengan lebih efektif.",
    link: "https://wa.me/987654321",
  },
];
const activeButton = ref("tahun");
</script>
