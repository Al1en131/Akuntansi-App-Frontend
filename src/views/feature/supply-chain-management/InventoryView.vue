<template>
  <div class="py-28 max-lg:py-4">
    <div class="">
      <div class="block px-28 max-lg:px-8 text-center pb-28 max-lg:pb-8">
        <h1
          class="text-primary font-bold text-5xl max-lg:text-3xl max-lg:mb-4 mb-10"
        >
          Pengelolaan
          <span class="relative inline-block">
            Inventory
            <span
              class="absolute inset-7 -z-10 bg-[#FFC055] h-6 w-[230px] max-lg:hidden left-1/2 -translate-x-1/2 rounded-sm"
            ></span>
          </span>
          Tanpa Repot? Core Jurnal Memudahkan Proses Anda
        </h1>
        <p class="text-[#45434D] text-3xl mb-20 max-lg:mb-4 max-lg:text-xl">
          Core Jurnal menyederhanakan pengelolaan stok dengan fitur otomatisasi
          yang efisien. Pantau dan atur persediaan Anda dengan mudah melalui
          antarmuka yang intuitif dan data real-time.
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
    title: "Pantau Produk Terlaris Anda",
    description:
      "Lacak produk terlaris dengan mudah menggunakan fitur ini untuk memahami tren penjualan. Analisis data penjualan secara real-time membantu Anda membuat keputusan yang lebih strategis tentang stok dan promosi. Dengan wawasan yang jelas, Anda dapat meningkatkan efisiensi penjualan dan merencanakan inventaris lebih baik. Dapatkan informasi mendalam tentang performa produk dengan satu klik.",
    link: "https://wa.me/123456789",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Bulk Import Data dari Excel",
    description:
      "Fitur ini memungkinkan Anda untuk mengimpor data produk dan stok secara massal dari file Excel dengan mudah. Proses importasi yang cepat menghemat waktu dan mengurangi kebutuhan entri data manual. Semua data akan secara otomatis terintegrasi ke dalam sistem, memastikan keakuratan dan konsistensi. Pengelolaan data yang lebih efisien memudahkan update inventaris.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Pengelolaan Stock Multi Gudang",
    description:
      "Kelola persediaan di berbagai lokasi gudang dengan fitur penyimpanan multi gudang. Anda dapat mengatur dan memantau stok di setiap gudang secara terpisah, memastikan distribusi yang efisien. Sistem ini memudahkan pelacakan barang dan mengoptimalkan manajemen inventaris di seluruh lokasi. Akses data stok secara real-time untuk meningkatkan pengelolaan operasional.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Penyesuaian Stock yang Mudah",
    description:
      "Lakukan penyesuaian stok dengan cepat dan akurat melalui fitur penyesuaian stok. Anda dapat memperbarui jumlah barang dengan mudah untuk mencerminkan perubahan fisik atau koreksi data. Sistem ini memastikan catatan stok selalu tepat dan sesuai dengan kondisi aktual. Reduksi kesalahan manual membantu menjaga akurasi inventaris.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Proses Stock Opname yang Mudah",
    description:
      "Fitur stok opname mempermudah proses verifikasi dan pencocokan stok fisik dengan catatan sistem. Dengan metode yang sistematis, Anda dapat melakukan audit stok secara berkala dengan lebih cepat. Hasil opname langsung diperbarui dalam sistem, meningkatkan akurasi data inventaris. Proses yang efisien mendukung manajemen persediaan yang lebih baik.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Laporan Gudang Secara Real-Time",
    description:
      "Akses laporan gudang dengan pembaruan real-time untuk informasi yang selalu akurat. Laporan ini memberikan wawasan mendetail tentang status dan pergerakan stok di gudang. Dengan data yang up-to-date, Anda dapat memantau performa gudang dan membuat keputusan berbasis data. Peningkatan visibilitas membantu dalam perencanaan dan pengelolaan inventaris.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Integrasi dengan Fitur Invoice",
    description:
      "Terintegrasi dengan fitur invoice untuk mempermudah proses pengelolaan tagihan dan pembayaran. Sistem ini secara otomatis menghubungkan transaksi dan dokumen invoice, memastikan konsistensi data. Anda dapat melacak status pembayaran dan mengelola faktur dengan lebih efisien. Integrasi yang mulus meningkatkan alur kerja dan akurasi keuangan.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Pantau Stock dari Mana Saja",
    description:
      "Akses dan pantau stok Anda dari lokasi manapun dengan fitur akses jarak jauh. Dengan konektivitas yang mudah, Anda dapat memeriksa dan mengelola inventaris secara real-time. Fleksibilitas ini memungkinkan pengelolaan stok yang efektif tanpa terbatas oleh lokasi fisik. Pastikan operasional Anda tetap terkontrol dan efisien dari jarak jauh.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Pengingat Restock Otomatis",
    description:
      "Dapatkan pengingat otomatis untuk melakukan restock sebelum persediaan habis. Fitur ini membantu Anda menjaga stok pada level optimal dan mencegah kekurangan barang. Dengan notifikasi yang tepat waktu, Anda dapat merencanakan pembelian dengan lebih baik dan menghindari gangguan operasional. Pengingat ini memastikan inventaris selalu tersedia sesuai kebutuhan.",
    link: "https://wa.me/987654321",
  },
  {
    image: "../../../assets/fitur.png",
    title: "Konversi Satuan yang Fleksibel",
    description:
      "Ubah satuan ukuran barang dengan mudah menggunakan fitur konversi satuan. Fitur ini mendukung berbagai satuan ukuran dan konversi otomatis, memudahkan pengelolaan inventaris. Dengan konversi yang akurat, Anda dapat memantau stok dalam berbagai unit tanpa kesulitan. Penyederhanaan proses ini membantu dalam pelaporan dan pengelolaan barang yang lebih efisien.",
    link: "https://wa.me/987654321",
  },
];
const activeButton = ref("tahun");
</script>
