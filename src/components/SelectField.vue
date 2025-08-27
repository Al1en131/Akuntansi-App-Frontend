<template>
    <div class="flex flex-col space-y-2">
      <label v-if="label" :for="id" class="text-lg max-lg:text-base font-medium">
        {{ label }}
      </label>
      <div class="relative">
        <select
          :id="id"
          :value="modelValue"
          :disabled="disabled"
          class="border items-center rounded-2xl text-black placeholder:text-black p-5 text-xl max-lg:text-base focus:outline-none focus:ring w-full bg-white"
          :class="[
            disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-white',
            error ? 'border-red-500 focus:ring-red-500' : 'border-[#7F8BCE] focus:ring-primary'
          ]"
          @change="$emit('update:modelValue', $event.target.value)"
        >
          <option value="" disabled selected>{{ placeholder }}</option>
          <option
            v-for="(option, index) in options"
            :key="index"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
        <!-- Ikon Custom -->
        <span
          v-if="icon"
          class="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary"
        >
          <slot name="icon"></slot>
        </span>
      </div>
      <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    modelValue: [String, Number],
    label: String,
    id: String,
    placeholder: String,
    disabled: Boolean,
    error: String,
    options: {
      type: Array,
      default: () => [],
    },
    icon: Boolean,
  });
  </script>
  
  <style scoped>
  /* Menghilangkan default arrow di select */
  select {
    appearance: none; /* CSS untuk menyembunyikan arrow */
    -webkit-appearance: none; /* Untuk browser Webkit */
    -moz-appearance: none; /* Untuk browser Firefox */
  }
  </style>
  