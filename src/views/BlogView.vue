<script setup>
// export default {
//   data() {
//     return {
//       searchQuery: "", // Untuk mengikat input dengan Vue.js
//     };
//   },
// };
import BlogView from "@/components/BlogCard.vue";
</script>
<template>
  <div class="">
    <div class="h-[835px] relative">
      <img src="/assets/img-blog.png" class="-z-10 max-lg:h-[835px]" alt="" />
      <div
        class="absolute -translate-x-1/2 left-1/2 px-28 max-lg:text-start max-lg:px-8 text-center w-full -translate-y-1/2 top-1/2"
      >
        <h1 class="font-bold text-6xl max-lg:text-3xl text-white mb-6">
          Core Jurnal Blog Site
        </h1>
        <p class="text-4xl max-lg:text-base text-white mb-12">
          Menjelajah Setiap Aspek Keuangan Lewat Insight yang Komprehensif di
          Core Jurnal Blog
        </p>
        <a
          href=""
          class="bg-secondary px-6 w-[262.28px] hidden max-lg:flex rounded-xl py-3  justify-between items-center text-2xl max-lg:text-lg max-lg:w-[200px] text-white"
          >Learn More
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
        <div class="flex justify-center max-lg:hidden items-center">
          <div class="relative flex items-center w-full max-w-3xl">
            <!-- Icon Search -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              class="absolute left-4"
            >
              <circle
                cx="16.5"
                cy="16.5"
                r="9"
                stroke="#73727A"
                stroke-width="1.5"
              />
              <path
                d="M16.5 12C15.9091 12 15.3239 12.1164 14.7779 12.3425C14.232 12.5687 13.7359 12.9002 13.318 13.318C12.9002 13.7359 12.5687 14.232 12.3425 14.7779C12.1164 15.3239 12 15.9091 12 16.5"
                stroke="#73727A"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M30 30L25.5 25.5"
                stroke="#73727A"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>

            <!-- Input -->
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Cari di sini...."
              class="w-full py-5 pl-16 pr-12 text-2xl rounded-2xl shadow-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <!-- Icon Mic -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              class="absolute right-4 border-l pl-4 flex w-[45px] flex-shrink-0 border-l-[#A2A1A6]"
            >
              <rect
                x="13.5"
                y="4.5"
                width="9"
                height="16.5"
                rx="4.5"
                stroke="#F66258"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M8.25 16.5C8.25 19.0859 9.27723 21.5658 11.1057 23.3943C12.9342 25.2228 15.4141 26.25 18 26.25C20.5859 26.25 23.0658 25.2228 24.8943 23.3943C26.7228 21.5658 27.75 19.0859 27.75 16.5"
                stroke="#F66258"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 31.5V28.5"
                stroke="#F66258"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="py-20 max-lg:py-5 space-y-20 px-28 max-lg:px-8">
      <BlogView />
    </div>
  </div>
</template>
