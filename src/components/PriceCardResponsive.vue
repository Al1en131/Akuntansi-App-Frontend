<template>
  <Carousel v-bind="{ ...config }" class="">
    <Slide v-for="(item, index) in financialPrices" :key="index">
      <div
        class="bg-white text-start rounded-3xl border-2 border-[#D0D0D3] p-8 max-lg:p-4 hover:border-primary"
      >
        <div class="space-y-6 max-lg:space-y-2 ">
          <div class="flex justify-between items-center">
            <p class="text-4xl font-bold max-lg:text-base">
              {{ item.category }}
            </p>
            <span
              v-if="item.isPopular"
              class="bg-[#F44336] text-white text-lg max-lg:text-xs font-semibold rounded-lg px-10 max-lg:py-1 max-lg:px-4 py-3"
            >
              Populer
            </span>
          </div>
          <p class="text-5xl max-lg:text-xl font-bold">
            <span>Rp</span>{{ item.price[activeBillingCycle] }}
            <span class="text-2xl font-normal max-lg:text-base"
              >/ {{ activeBillingCycle }}</span
            >
          </p>
          <p class="text-2xl md:leading-10 max-lg:w-[220px] text-[#73727A] text-start max-lg:text-xl">
            {{ item.description }}
          </p>
        </div>
        <hr
          class="border-t-2 border-dashed border-gray-300 my-11 max-lg:my-4 w-full"
        />
        <div class="max-lg:text-base text-2xl mb-11">
          <p class="text-[#45434D] mb-3">
            Fitur Utama Paket <span>{{ item.category }}</span>
          </p>
          <div
            v-for="(benefit, i) in item.benefits"
            :key="i"
            class="flex gap-2 items-center mb-4"
          >
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10 max-lg:w-5 max-lg:h-5"
                viewBox="0 0 40 40"
                fill="none"
              >
                <rect
                  x="0.599976"
                  y="0.399902"
                  width="39.2"
                  height="39.2"
                  rx="19.6"
                  fill="#C6CEFF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.5241 12.4697L16.8295 23.7561L13.7261 20.4404C13.1545 19.9014 12.2561 19.8687 11.6028 20.3261C10.9658 20.7997 10.7861 21.6327 11.1781 22.3024L14.8531 28.2804C15.2125 28.8357 15.8331 29.1787 16.5355 29.1787C17.2051 29.1787 17.8421 28.8357 18.2015 28.2804C18.7895 27.5127 30.0105 14.1357 30.0105 14.1357C31.4805 12.6331 29.7001 11.3101 28.5241 12.4534V12.4697Z"
                  fill="#536DFE"
                />
              </svg>
            </div>
            <div class="text-start">{{ benefit }}</div>
          </div>
        </div>
        <button
          class="bg-secondary text-3xl max-lg:text-sm rounded-2xl text-center md:px-8 py-4 w-full text-white"
        >
          Langganan Sekarang
        </button>
      </div>
    </Slide>
  </Carousel>
</template>
<style scoped>
.carousel__slide {
  padding:1;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: scale(0.9);
}

.carousel__slide--next {
  opacity: 1;
  transform: scale(0.9);
}

.carousel__slide--active {
  opacity: 1;
  transform: scale(1);
}

.carousel-container {
  margin: auto;
}

</style>

<script setup>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const props = defineProps({
  activeBillingCycle: {
    type: String,
    default: "tahun",
  },
});
const financialPrices = [
  {
    category: "Basic",
    price: {
      tahun: "499.000",
      bulan: "49.900",
    },
    description:
      "Paket dengan fitur dasar untuk kebutuhan keuangan dan akuntansi sederhana.",
    benefits: [
      "Siklus Penjualan",
      "Siklus Pembelian",
      "Management Produk Inventory",
      "Management Asset",
      "1 Pengguna dan 1 Gudang",
    ],
    isPopular: false,
  },
  {
    category: "Premium",
    price: {
      tahun: "899.000",
      bulan: "89.900",
    },
    description:
      "Menawarkan fitur lanjutan dan dukungan ekstra untuk perusahaan yang berkembang.",
    benefits: [
      "Semua di Paket Basic",
      "Batch dan Nomor Seri ",
      "Pemenuhan Masuk & Keluar",
      "Dashboard Khusus",
      "5 Pengguna dan Multi Gudang",
    ],
    isPopular: true,
  },
  {
    category: "Enterprise",
    price: {
      tahun: "1.299.000",
      bulan: "129.900",
    },
    description:
      "Solusi komprehensif dengan fitur khusus dan keamanan tingkat tinggi untuk perusahaan besar.",
    benefits: [
      "Semua di Paket Premium",
      "Laporan Keuangan Kustom",
      "Akses Multi Cabang",
      "Otomatisasi Pajak",
      "15 Pengguna dan Multi Gudang",
    ],
    isPopular: false,
  },
];

const config = {
  wrapAround: true,
  transition: 500,
  breakpoints: {
    200: {
      itemsToShow: 1.5, 
    },
  },
};

</script>
