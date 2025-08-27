<template>
  <div
    class="p-6 max-lg:p-3 border-t-[16px] border-[#FFDFAA] bg-white rounded-xl space-y-4 max-lg:space-y-2"
    v-for="(item, index) in financialFeatures"
    :key="index"
  >
    <h2 class="text-2xl max-lg:text-xl text-[#F44336] font-bold">{{ item.title }}</h2>
    <p class="text-lg">{{ item.description }}</p>
  </div>
</template>

<script setup>
const financialFeatures = [
  {
    title: "Pengelolaan Keuangan",
    description:
      "Dashboard pengelolaan keuangan berfungsi untuk memantau dan menganalisis kinerja keuangan secara efisien dalam satu tampilan terpadu.",
  },
  {
    title: "Integrasi",
    description:
      "Integrasi dashboard menggabungkan data dari berbagai sumber atau sistem ke dalam satu tampilan, memungkinkan analisis dan pemantauan yang lebih terkoordinasi.",
  },
  {
    title: "Keamanan Data",
    description:
      "Keamanan data dashboard mencakup perlindungan terhadap data sensitif dari ancaman, serta pengendalian akses untuk menjaga integritas dan kerahasiaan informasi.",
  },
  {
    title: "Kustomisasi",
    description:
      "Kustomisasi dashboard memungkinkan pengguna untuk menyesuaikan tampilan, widget, dan data yang ditampilkan sesuai dengan kebutuhan dan preferensi spesifik mereka.",
  },
];
</script>
