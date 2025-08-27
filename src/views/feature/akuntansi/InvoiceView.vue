<template>
  <div class="py-28 max-lg:py-4">
    <div class="">
      <div class="block px-28 max-lg:px-8 text-center pb-28 max-lg:pb-8">
        <h1
          class="text-primary font-bold text-5xl max-lg:text-3xl max-lg:mb-4 mb-10"
        >
          Dasboard Terintegrasi untuk Pengelolaan
          <span class="relative inline-block">
            Invoice Digital
            <span
              class="absolute inset-7 -z-10 bg-[#FFC055] h-6 max-lg:hidden  w-[345px] left-1/2 -translate-x-1/2 rounded-sm"
            ></span>
          </span>
        </h1>
        <p class="text-[#45434D] text-3xl mb-20 max-lg:mb-4 max-lg:text-xl">
          Ucapkan selamat tinggal pada cara lama dalam pembuatan invoice. Kini
          lebih cepat, praktis, dan dapatkan laporan otomatis!
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
    title: "Real Time Update",
    description:
      "Status invoice transaksi akan diperbarui secara otomatis untuk mencerminkan informasi terkini tentang pembayaran dan pemrosesan. Ini memastikan Anda selalu mendapatkan data yang akurat tanpa perlu memantau secara manual. Dengan pembaruan real-time, Anda dapat mengelola keuangan dengan lebih efisien dan tanpa kesalahan.",
    link: "https://wa.me/123456789",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Beragam Template Tersedia",
    description:
      "Membuat invoice menjadi sangat mudah dengan menggunakan stok template yang tersedia. Template ini dirancang untuk memudahkan pembuatan faktur yang profesional dan konsisten tanpa perlu memulai dari awal. Cukup pilih template yang sesuai, isi rincian yang diperlukan, dan invoice siap untuk dikirim.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Tagihan Tercatat Otomatis",
    description:
      "Dengan sistem kami, tidak ada tagihan yang akan terlewat. Semua transaksi dan invoice tercatat secara otomatis dan dikelola dengan efisien, memastikan bahwa setiap tagihan diperhatikan dan tidak ada yang terlewatkan. Ini membantu Anda menjaga arus kas dan memastikan semua pembayaran ditangani tepat waktu.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Terintegrasi dengan CorePay",
    description:
      "Fitur ini terintegrasi dengan CorePay, memungkinkan proses pembayaran yang mulus dan efisien langsung dari invoice. Dengan integrasi ini, Anda dapat memproses transaksi dengan cepat tanpa harus beralih aplikasi. Ini memastikan bahwa semua tagihan dan pembayaran dikelola secara terpusat dan otomatis, memudahkan administrasi keuangan Anda.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Terintegrasi dengan Inventory",
    description:
      "Fitur ini terintegrasi dengan sistem inventori, sehingga setiap invoice secara otomatis diperbarui sesuai dengan stok barang yang tersedia. Dengan integrasi ini, Anda dapat melacak persediaan dan mengelola faktur secara bersamaan, memastikan bahwa data inventori dan tagihan selalu sinkron dan akurat. Ini memudahkan Anda dalam mengelola stok dan memastikan bahwa tidak ada kesalahan dalam proses pengiriman dan penagihan.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "User Interface yang Intuitif",
    description:
      "User Interface yang intuitif memudahkan Anda dalam menggunakan aplikasi tanpa memerlukan pelatihan khusus. Desain yang sederhana dan navigasi yang jelas memungkinkan Anda untuk membuat, mengelola, dan memeriksa invoice dengan cepat dan mudah. Dengan antarmuka yang mudah dipahami, Anda dapat fokus pada pekerjaan Anda tanpa terhambat oleh kompleksitas sistem.",
    link: "https://wa.me/987654321",
  },
];
const activeButton = ref("tahun");
</script>
