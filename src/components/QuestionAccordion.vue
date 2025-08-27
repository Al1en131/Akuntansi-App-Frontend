<template>
  <div id="accordion-flush">
    <div v-for="(item, index) in accordionItems" :key="index">
      <h2
        :id="'accordion-flush-heading-' + index"
        class="border-b py-8 max-lg:py-3 border-[#FFC055]"
      >
        <button
          type="button"
          class="w-full block font-medium rtl:text-right"
          @click="toggleAccordion(index)"
          :aria-expanded="isOpen(index).toString()"
          :aria-controls="'accordion-flush-body-' + index"
        >
          <span class="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :class="{ 'rotate-180': isOpen(index) }"
              aria-hidden="true"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.8898 10.6665L15.8922 16.6681L9.88585 10.6665L8 12.5537L15.8935 20.4398L23.777 12.553L21.8898 10.6665Z"
                fill="#F44336"
              />
            </svg>
            <span
              class="text-primary max-lg:text-start text-3xl max-lg:text-lg"
              >{{ item.title }}</span
            >
          </span>
        </button>
        <div
          :id="'accordion-flush-body-' + index"
          :class="{ hidden: !isOpen(index) }"
          :aria-labelledby="'accordion-flush-heading-' + index"
        >
          <div class="pt-3">
            <p
              class="ps-12 max-lg:ps-9 text-[#73727A] text-2xl max-lg:text-base"
            >
              {{ item.content }}
            </p>
          </div>
        </div>
      </h2>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const accordionItems = ref([
  {
    title: "Apa saja fitur utama yang ditawarkan oleh Core Jurnal?",
    content:
      "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
  },
  {
    title: "Apakah saya bisa mencoba Core Jurnal sebelum membeli?",
    content:
      "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
  },
  {
    title: "Bagaimana cara Core Jurnal mengamankan data keuangan saya?",
    content:
      "Data Anda dilindungi dengan enkripsi end-to-end, akses berbasis peran, dan audit trail yang lengkap.",
  },
  {
    title:"Bisakah saya mengintegrasikan Core Jurnal dengan software lain yang saya gunakan?",
    content:
      "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.",
  },
  {
    title: "Apakah Core Jurnal mendukung multi-currency dan multi-language?",
    content:
      "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.",
  },
  {
    title:"Bagaimana jika saya membutuhkan fitur yang tidak tersedia di paket saya?",
    content:
      "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.",
  },
  {
    title: "Apakah saya akan mendapatkan dukungan pelanggan di Core Jurnal?",
    content:
      "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.",
  },
  {
    title:"Bagaimana proses pembayaran dan berapa lama kontrak yang tersedia di Core Jurnal?",
    content:
      "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.",
  },
]);

const openIndex = ref(null);

const toggleAccordion = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const isOpen = (index) => openIndex.value === index;
</script>
