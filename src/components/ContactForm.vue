<template>
  <div class="space-y-6">
    <InputField v-model="name" id="name" placeholder="Name" :icon="true">
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="37"
          viewBox="0 0 36 37"
          fill="none"
        >
          <circle
            cx="17.9999"
            cy="12.4165"
            r="5.25"
            stroke="#F44336"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M7.27363 25.8384C8.23318 22.3216 11.872 20.6665 15.5174 20.6665H20.4824C24.1278 20.6665 27.7667 22.3216 28.7262 25.8384C28.923 26.5596 29.0801 27.3399 29.1692 28.1688C29.2577 28.9925 28.5784 29.6665 27.7499 29.6665H8.24994C7.42151 29.6665 6.74217 28.9925 6.83068 28.1688C6.91974 27.3399 7.07687 26.5596 7.27363 25.8384Z"
            stroke="#F44336"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </template>
    </InputField>

    <InputField
      v-model="email"
      type="email"
      id="email"
      placeholder="Masukkan email"
      :icon="true"
    >
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="37"
          viewBox="0 0 36 37"
          fill="none"
        >
          <rect
            x="6"
            y="9.25"
            width="24"
            height="18"
            rx="3"
            stroke="#F44336"
            stroke-width="1.5"
          />
          <path
            d="M6 13.75L16.6584 19.0792C17.5029 19.5015 18.4971 19.5015 19.3416 19.0792L30 13.75"
            stroke="#F44336"
            stroke-width="1.5"
          />
        </svg>
      </template>
    </InputField>
    <InputField v-model="text" id="no_handphone" placeholder="+62" :icon="true">
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="37"
          viewBox="0 0 36 37"
          fill="none"
        >
          <path
            d="M26.5607 20.6432L30.5328 24.6154C31.067 25.1495 31.067 26.0155 30.5328 26.5497C27.645 29.4375 23.0732 29.7624 19.806 27.312L17.4429 25.5397C14.8276 23.5782 12.5043 21.255 10.5429 18.6397L8.77051 16.2765C6.32011 13.0093 6.64502 8.4375 9.53285 5.54967C10.067 5.01553 10.933 5.01553 11.4672 5.54967L15.4393 9.52186C16.0251 10.1076 16.0251 11.0574 15.4393 11.6432L13.9076 13.1749C13.6642 13.4183 13.6038 13.7902 13.7578 14.0981C15.5378 17.6581 18.4244 20.5447 21.9844 22.3247C22.2923 22.4787 22.6642 22.4183 22.9076 22.1749L24.4393 20.6432C25.0251 20.0574 25.9749 20.0574 26.5607 20.6432Z"
            stroke="#F44336"
            stroke-width="1.5"
          />
        </svg>
      </template>
    </InputField>
    <SelectField
      v-model="selectedDashboard"
      id="select-dashboard"
      label=""
      placeholder="Pilih Plan Dashboard"
      :options="dashboardOptions"
      :icon="true"
      :error="selectError"
    >
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="37"
          viewBox="0 0 36 37"
          fill="none"
        >
          <path
            d="M12 15L18 21L24 15"
            stroke="#F44336"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </template>
    </SelectField>
    <SelectField
      v-model="selectedDevice"
      id="select-device"
      label=""
      placeholder="Pilih Device"
      :options="deviceOptions"
      :icon="true"
      :error="genderError"
    >
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="37"
          viewBox="0 0 36 37"
          fill="none"
        >
          <path
            d="M12 15L18 21L24 15"
            stroke="#F44336"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg> </template
    ></SelectField>

    <button
      class="bg-secondary font-semibold flex justify-center rounded-xl items-center gap-3 text-3xl max-lg:text-base text-center text-white w-full py-4"
    >
      <span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37 37"
          class="w-9 h-9 max-lg:w-5 max-lg:h-5"
          fill="none"
        >
          <path
            d="M28.8749 7.9481C27.4997 6.55899 25.8617 5.4576 24.0563 4.70817C22.251 3.95875 20.3146 3.57629 18.3599 3.5831C10.1699 3.5831 3.49488 10.2581 3.49488 18.4481C3.49488 21.0731 4.18488 23.6231 5.47488 25.8731L3.37488 33.5831L11.2499 31.5131C13.4249 32.6981 15.8699 33.3281 18.3599 33.3281C26.5499 33.3281 33.2249 26.6531 33.2249 18.4631C33.2249 14.4881 31.6799 10.7531 28.8749 7.9481ZM18.3599 30.8081C16.1399 30.8081 13.9649 30.2081 12.0599 29.0831L11.6099 28.8131L6.92988 30.0431L8.17488 25.4831L7.87488 25.0181C6.6415 23.0485 5.98659 20.772 5.98488 18.4481C5.98488 11.6381 11.5349 6.0881 18.3449 6.0881C21.6449 6.0881 24.7499 7.3781 27.0749 9.7181C28.2261 10.864 29.1384 12.2271 29.759 13.7282C30.3795 15.2294 30.6959 16.8388 30.6899 18.4631C30.7199 25.2731 25.1699 30.8081 18.3599 30.8081ZM25.1399 21.5681C24.7649 21.3881 22.9349 20.4881 22.6049 20.3531C22.2599 20.2331 22.0199 20.1731 21.7649 20.5331C21.5099 20.9081 20.8049 21.7481 20.5949 21.9881C20.3849 22.2431 20.1599 22.2731 19.7849 22.0781C19.4099 21.8981 18.2099 21.4931 16.7999 20.2331C15.6899 19.2431 14.9549 18.0281 14.7299 17.6531C14.5199 17.2781 14.6999 17.0831 14.8949 16.8881C15.0599 16.7231 15.2699 16.4531 15.4499 16.2431C15.6299 16.0331 15.7049 15.8681 15.8249 15.6281C15.9449 15.3731 15.8849 15.1631 15.7949 14.9831C15.7049 14.8031 14.9549 12.9731 14.6549 12.2231C14.3549 11.5031 14.0399 11.5931 13.8149 11.5781H13.0949C12.8399 11.5781 12.4499 11.6681 12.1049 12.0431C11.7749 12.4181 10.8149 13.3181 10.8149 15.1481C10.8149 16.9781 12.1499 18.7481 12.3299 18.9881C12.5099 19.2431 14.9549 22.9931 18.6749 24.5981C19.5599 24.9881 20.2499 25.2131 20.7899 25.3781C21.6749 25.6631 22.4849 25.6181 23.1299 25.5281C23.8499 25.4231 25.3349 24.6281 25.6349 23.7581C25.9499 22.8881 25.9499 22.1531 25.8449 21.9881C25.7399 21.8231 25.5149 21.7481 25.1399 21.5681Z"
            fill="white"
          /></svg></span
      >Kirim Via Whatsapp
    </button>
  </div>
</template>

<script setup>
import InputField from "./InputField.vue";
import SelectField from "./SelectField.vue";
import { ref } from "vue";
const selectedDashboard = ref("");
const dashboardOptions = ref([
  { value: "option1", label: "Opsi 1" },
  { value: "option2", label: "Opsi 2" },
  { value: "option3", label: "Opsi 3" },
]);

const selectError = ref("");

const selectedDevice = ref("");
const deviceOptions = ref([
  { value: "device 1", label: "device 1" },
  { value: "device 2", label: "device 2" },
]);

const genderError = ref("");
const username = ref("");
const email = ref("");
</script>
