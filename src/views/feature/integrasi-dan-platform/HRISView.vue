<template>
  <div class="py-28 max-lg:py-4">
    <div class="">
      <div class="block px-28 max-lg:px-8 text-center pb-28 max-lg:pb-8">
        <h1
          class="text-primary font-bold text-5xl max-lg:text-3xl max-lg:mb-4 mb-10"
        >
          Cara Baru Mengelola Akuntansi dan
          <span class="relative inline-block">
            HRIS
            <span
              class="absolute inset-7 -z-10 bg-[#FFC055] h-6 max-lg:hidden left-1/2 w-[120px] -translate-x-1/2 rounded-sm"
            ></span>
          </span>
          dengan Mudah
        </h1>
        <p class="text-[#45434D] text-3xl mb-20 max-lg:mb-4 max-lg:text-xl">
          Temukan cara baru yang lebih sederhana untuk mengelola akuntansi dan
          HRIS dengan solusi kami. Sistem kami memastikan proses yang lebih
          efisien dan integrasi mulus, memudahkan pengelolaan informasi dan
          meningkatkan produktivitas.
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
    title: "List Kontak yang Terorganisir",
    description:
      "Fitur ini menyediakan daftar kontak yang terorganisir dengan baik, memudahkan Anda mengelola dan mengakses informasi kontak penting. Anda dapat menambahkan, mengedit, dan mengelompokkan kontak sesuai kebutuhan bisnis. Dengan integrasi data yang mudah, menghubungi pihak terkait menjadi lebih efisien. Ini membantu Anda menjaga komunikasi yang lancar dan terstruktur.",
    link: "https://wa.me/123456789",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Jurnal Akuntansi yang Akurat",
    description:
      "Fitur penjurnalan ini memungkinkan pencatatan transaksi keuangan secara akurat dan sistematis. Setiap entri jurnal tercatat dengan rinci, membantu Anda memantau aktivitas keuangan dengan lebih baik. Dengan rekam jejak yang jelas, Anda dapat dengan mudah melakukan audit dan memastikan kepatuhan akuntansi. Memudahkan pelaporan dan analisis keuangan.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Proses Reimbursment yang Efisien",
    description:
      "Atur dan kelola klaim reimbursement dengan proses yang efisien dan terintegrasi. Fitur ini memungkinkan pengajuan, persetujuan, dan pemrosesan klaim secara otomatis, mengurangi waktu dan upaya manual. Anda dapat melacak status reimbursement secara real-time dan memastikan pembayaran yang tepat waktu. Proses yang lebih cepat dan transparan meningkatkan kepuasan karyawan.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Pengelolaan Presensi Terintegrasi dengan Akuntansi",
    description:
      "Integrasikan pengelolaan presensi karyawan dengan sistem akuntansi untuk efisiensi maksimal. Fitur ini memungkinkan pencatatan waktu kerja dan absensi secara otomatis, yang kemudian terhubung langsung dengan akuntansi untuk penghitungan gaji dan biaya. Mengurangi kesalahan manual dan memastikan akurasi dalam perhitungan gaji. Mempermudah proses administrasi dan pengelolaan sumber daya manusia.",
    link: "https://wa.me/987654321",
  },
];
const activeButton = ref("tahun");
</script>
