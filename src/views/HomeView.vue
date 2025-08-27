<script setup>
import FeaturesCard from "../components/FeatureCard.vue";
import StatsCard from "../components/StatCard.vue";
import RecommendationsCard from "../components/RecommendationCard.vue";
import RecommendationsCardResponsive from "../components/RecommendationCardResponsive.vue";
import PricesCard from "../components/PriceCard.vue";
import PricesCardResponsive from "../components/PriceCardResponsive.vue";
import QuestionAccordions from "@/components/QuestionAccordion.vue";
import ContactForm from "@/components/ContactForm.vue";
import { ref } from "vue";

const activeButton = ref("tahun");
</script>

<template>
  <div class="font-sans">
    <!-- Hero -->
    <div class="py-20 max-lg:py-6 px-28 max-lg:px-8 w-full">
      <div class="flex max-lg:block md:justify-between gap-10 items-center">
        <div
          class="space-y-8 max-lg:space-y-5 max-lg:mb-14 w-4/6 max-lg:w-full"
        >
          <p class="text-secondary max-lg:text-base text-xl font-semibold">
            Core Jurnal Features
          </p>
          <h1 class="font-bold text-primary text-5xl max-lg:text-4xl">
            Solusi Efektif untuk Pengelolaan Keuangan Bisnis Anda
          </h1>
          <p class="text-2xl max-lg:text-xl">
            Gunakan Core Jurnal untuk invoicing, purchasing, laporan, dan
            analisis bisnis dengan mudah dan praktis, kapan saja, di mana saja!
          </p>
          <div class="flex gap-8 items-center">
            <button
              class="bg-primary text-white py-3 px-6 max-lg:px-3 max-lg:py-2 rounded-md hover:bg-secondary text-2xl max-lg:text-lg font-medium"
            >
              Coba Gratis
            </button>
            <button
              class="bg-transparent text-secondary max-lg:px-3 max-lg:py-2 py-3 px-6 rounded-md max-lg:text-lg hover:bg-primary hover:text-white text-2xl font-medium flex justify-between items-center border-2 border-secondary"
            >
              Lihat Demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M11.3201 8.87L18.5201 16.07L11.3201 23.27"
                  stroke="currentColor"
                  stroke-width="1.728"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <img class="w-2/6 max-lg:w-full" src="/assets/mockup.png" alt="" />
      </div>
    </div>
    <!-- Features -->
    <div
      class="bg-primary px-28 max-lg:px-8 py-20 max-lg:py-6 max-lg:space-y-8 space-y-24"
    >
      <div class="text-center text-white space-y-4">
        <h1 class="font-semibold max-lg:text-2xl text-5xl">
          Semua Kebutuhan Bisnis dalam Satu Aplikasi
        </h1>
        <p class="text-2xl max-lg:text-base">
          Menghadirkan semua kebutuhan tim Finance Anda dalam satu aplikasi
          otomatis
        </p>
      </div>
      <div
        class="flex md:justify-between max-lg:space-y-8 max-lg:block gap-10 items-center"
      >
        <img src="/assets/mockup-2.png" class="md:w-6/12" alt="" />
        <div class="block space-y-5 md:w-6/12">
          <FeaturesCard />
        </div>
      </div>
    </div>
    <!-- why choose this website -->
    <div class="py-20 max-lg:py-6 px-28 max-lg:px-8 w-full">
      <div class="flex max-lg:block md:justify-between gap-10 items-center">
        <img
          class="w-3/6 max-lg:w-full max-lg:block hidden"
          src="/assets/why.png"
          alt=""
        />
        <div
          class="space-y-8 max-lg:space-y-5 max-lg:mb-14 w-3/6 max-lg:w-full"
        >
          <h1 class="font-bold text-primary text-5xl max-lg:text-2xl">
            Kenapa Core Jurnal?
          </h1>
          <p class="text-2xl max-lg:text-xl">
            Core Jurnal adalah pilihan ideal untuk kebutuhan akuntansi dan
            keuangan Anda karena menawarkan fitur unggulan seperti kemudahan
            pencatatan transaksi, laporan keuangan yang komprehensif, dan
            integrasi sistem yang mulus. Dengan antarmuka yang intuitif dan
            dukungan pelanggan yang responsif, Core Jurnal memudahkan
            pengelolaan keuangan bisnis Anda secara efisien dan efektif.
          </p>
          <div class="">
            <button
              class="bg-secondary text-white max-lg:px-3 max-lg:py-2 py-3 px-6 rounded-md max-lg:text-lg hover:bg-primary text-2xl font-medium flex justify-between items-center border-2 border-secondary"
            >
              Baca Selengkapnya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M11.3201 8.87L18.5201 16.07L11.3201 23.27"
                  stroke="currentColor"
                  stroke-width="1.728"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <img
          class="w-3/6 max-lg:w-full max-lg:hidden"
          src="/assets/why.png"
          alt=""
        />
      </div>
      <div
        class="flex max-lg:grid max-lg:grid-cols-2 md:justify-between gap-4 items-center"
      >
        <StatsCard />
      </div>
    </div>
    <!-- recommendation -->
    <div class="py-20 max-lg:py-6 space-y-14 w-full">
      <div class="text-center space-y-4  px-28 max-lg:px-8 ">
        <h1 class="text-primary text-5xl max-lg:text-2xl font-bold">
          Apa Kata Pengguna Tentang Kami
        </h1>
        <p class="text-2xl max-lg:text-base">
          Temukan bagaimana produk dan layanan kami telah meningkatkan
          pengalaman pengguna. Cerita mereka menjadi bukti komitmen kami untuk
          memberikan solusi terbaik bagi Anda
        </p>
      </div>
      <div class="flex justify-between gap-10 max-lg:hidden items-stretch">
        <RecommendationsCard />
      </div>
      <div class="justify-between gap-10 hidden max-lg:block items-stretch">
        <RecommendationsCardResponsive />
      </div>
    </div>
    <!-- price -->
    <div
      class="py-20 max-lg:py-6 space-y-20 max-lg:space-y-6  w-full"
    >
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
      <div
        class="flex gap-10 px-28 max-lg:hidden items-stretch max-lg:py-4"
      >
        <PricesCard :activeBillingCycle="activeButton" />
      </div>
      <div
        class="items-stretch hidden max-lg:block max-lg:py-4"
      >
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
    <!-- question -->
    <div
      class="py-20 max-lg:py-6 max-lg:space-y-6 space-y-20 px-28 max-lg:px-8 w-full"
    >
      <div class="text-center space-y-4">
        <h1 class="text-primary text-5xl font-bold max-lg:text-2xl">
          Frequently Ask Question
        </h1>
      </div>
      <div>
        <QuestionAccordions />
      </div>
    </div>
    <!-- contact us -->
    <div
      class="py-20 max-lg:py-6 space-y-20 max-lg:space-y-6 px-28 max-lg:px-8 w-full"
    >
      <div class="space-y-10">
        <h1
          class="text-primary text-5xl max-lg:text-2xl font-bold leading-[70px]"
        >
          Siap mengoptimalkan pengelolaan keuangan <br />
          Anda dengan Core Jurnal?
        </h1>
        <p class="text-2xl max-lg:text-base">
          Bergabunglah dengan Core Jurnal hari ini dan optimalkan pengelolaan
          keuangan Anda dengan dukungan dari tim ahli kami. <br />
          Mulailah perjalanan menuju efisiensi keuangan sekarang juga!
        </p>
      </div>
      <div class="flex max-lg:block md:justify-between gap-10 items-center">
        <img class="md:w-1/2" src="/assets/contact.png" alt="" />
        <div class="md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</template>
