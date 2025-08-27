<script setup>
const SolutionCard = [
  {
    title: "Manajemen Inventori",
    description: "Pantau dan kelola stok inventaris dengan efisien.",
    image: "/assets/solution.png",
  },
  {
    title: "Laporan Real-Time",
    description:
      "Terima laporan keuangan yang selalu terupdate secara langsung.",
    image: "/assets/solution-2.png",
  },
  {
    title: "Multi Cabang dan Gudang",
    description: "Kelola beberapa cabang dan gudang dari satu sistem.",
    image: "/assets/solution-3.png",
  },
  {
    title: "Support Scanner",
    description:
      "Integrasikan dengan scanner untuk akurasi data yang lebih baik.",
    image: "/assets/solution-4.png",
  },
  {
    title: "Diskon Fleksibel",
    description: "Terapkan berbagai jenis diskon sesuai kebutuhan bisnis Anda.",
    image: "/assets/solution-5.png",
  },
  {
    title: "Kemudahan Purchasing",
    description: "Proses pembelian menjadi lebih cepat dan sederhana.",
    image: "/assets/solution-6.png",
  },
  {
    title: "Skinronisasi Market",
    description:
      "Integrasikan data dengan pasar untuk informasi yang konsisten.",
    image: "/assets/solution-7.png",
  },
  {
    title: "Pantau Darimana Saja",
    description: "Monitor aktivitas bisnis Anda dari lokasi mana pun.",
    image: "/assets/solution-8.png",
  },
];
</script>

<template>
  <div
    v-for="(item, index) in SolutionCard"
    :key="index"
    class="bg-white p-7 max-lg:p-4 border rounded-[20px] border-[#BFC5E6]"
  >
    <img
      :src="item.image"
      class="rounded-[20px] h-[224.9px] w-full object-cover"
      :alt="item.title"
    />
    <div class="py-8 max-lg:py-5">
      <p class="text-black text-xl font-semibold mb-2">{{ item.title }}</p>
      <p class="text-xl text-[#666666]">{{ item.description }}</p>
    </div>
    <div>
      <a
        href=""
        class="bg-secondary px-6 w-[250px] max-lg:px-3 flex rounded-xl py-3 justify-between items-center text-2xl max-lg:text-base max-lg:w-[180px] text-white"
        >Selengkapnya
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
</template>
