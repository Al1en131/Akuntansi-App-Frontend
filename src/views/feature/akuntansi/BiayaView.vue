<template>
  <div class="py-28 max-lg:py-4">
    <div class="">
      <div class="block px-28 max-lg:px-8 text-center pb-28 max-lg:pb-8">
        <h1
          class="text-primary font-bold text-5xl max-lg:text-3xl max-lg:mb-4 mb-10"
        >
          Gunakan Fitur Terbaru Kami untuk
          <span class="relative inline-block">
            Mengatur dan Melacak Biaya
            <span
              class="absolute inset-7 -z-10 bg-[#FFC055] h-6 w-[680px] max-lg:hidden left-1/2 -translate-x-1/2 rounded-sm"
            ></span>
          </span>
          Bisnismu dengan Mudah
        </h1>
        <p class="text-[#45434D] text-3xl mb-20 max-lg:mb-4 max-lg:text-xl">
          Fitur terbaru kami memudahkan pengaturan dan pelacakan biaya bisnis.
          Pantau pengeluaran dengan cepat dan kontrol anggaran Anda dengan
          mudah.
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
    title: "Catat Pengeluaran dengan Mudah",
    description:
      "Catat pengeluaran dengan mudah menggunakan fitur kami yang sederhana dan intuitif. Dengan antarmuka yang user-friendly, Anda dapat dengan cepat merekam setiap transaksi tanpa kerumitan. Ini memastikan bahwa catatan keuangan Anda selalu akurat dan teratur. Proses pencatatan yang cepat ini membantu Anda menghemat waktu dan mengurangi kesalahan.",
    link: "https://wa.me/123456789",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Pantau Pengeluaran Secara Real-Time",
    description:
      "Pantau pengeluaran secara real-time untuk mendapatkan wawasan langsung tentang keuangan Anda. Dengan pembaruan otomatis, Anda bisa melihat transaksi terbaru dan memantau arus kas dengan cepat, sehingga Anda selalu tahu posisi keuangan terkini. Ini memungkinkan Anda mengambil keputusan yang lebih baik dan cepat dalam mengelola anggaran.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Lacak Status Pembayaran",
    description:
      "Lacak status pembayaran dengan mudah untuk memastikan semua tagihan dan invoice terkelola dengan baik. Sistem kami memberikan informasi terkini tentang status pembayaran, memudahkan Anda untuk mengikuti dan mengelola kewajiban finansial. Dengan pemantauan yang tepat, Anda dapat menghindari keterlambatan dan menjaga hubungan baik dengan kreditor.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Penyimpanan Bukti Pembayaran",
    description:
      "Simpan bukti pembayaran secara digital untuk dokumentasi yang mudah diakses. Fitur ini memungkinkan Anda mengunggah dan menyimpan kwitansi atau bukti transfer, memastikan semua dokumen keuangan penting tersimpan dengan aman dan teratur. Ini juga mempermudah proses audit dan pelaporan keuangan.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Kategorikan Sesuai Biaya",
    description:
      "Kategorikan pengeluaran sesuai jenis biaya untuk memudahkan pelaporan dan analisis. Dengan fitur ini, Anda dapat mengelompokkan transaksi ke dalam kategori yang relevan, membantu Anda mengelola anggaran dan memahami pola pengeluaran. Pengelompokan ini mempermudah pembuatan laporan keuangan yang terperinci dan akurat.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Bulk Import Data",
    description:
      "Import data dalam jumlah besar dengan mudah menggunakan fitur bulk import. Ini memungkinkan Anda untuk mengunggah sejumlah besar informasi keuangan sekaligus, menghemat waktu dan mengurangi kebutuhan untuk input data manual. Fitur ini ideal untuk migrasi data dari sistem lain atau saat mengelola data yang sangat besar.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Lacak Biaya per Vendor",
    description:
      "Lacak biaya per vendor untuk memantau pengeluaran yang terkait dengan masing-masing pemasok. Dengan fitur ini, Anda dapat mengelola dan menganalisis biaya berdasarkan vendor, memudahkan perencanaan anggaran dan evaluasi kinerja. Ini juga membantu dalam negosiasi kontrak dan mengoptimalkan hubungan dengan pemasok.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Anggaran",
    description:
      "Kelola anggaran Anda dengan fitur anggaran yang komprehensif. Buat, sesuaikan, dan pantau anggaran untuk berbagai kategori dan periode waktu, membantu Anda menjaga kontrol atas pengeluaran dan merencanakan keuangan dengan lebih baik. Fitur ini juga memberikan gambaran yang jelas tentang alokasi dana dan potensi penghematan.",
    link: "https://wa.me/987654321",
  },
];
const activeButton = ref("tahun");
</script>
