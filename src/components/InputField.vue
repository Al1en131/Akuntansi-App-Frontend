<template>
    <div class="flex flex-col space-y-2">
      <label v-if="label" :for="id" class="text-lg max-lg:text-base font-medium">
        {{ label }}
      </label>
      <div class="relative">
        <input
          :type="type"
          :id="id"
          :value="modelValue"
          :placeholder="placeholder"
          :disabled="disabled"
          :class="[  
            'border items-center rounded-2xl text-black placeholder:text-black p-5 text-xl max-lg:text-base focus:outline-none focus:ring w-full',
            disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-white',
            error ? 'border-red-500 focus:ring-red-500' : 'border-[#7F8BCE] focus:ring-primary'
          ]"
          @input="$emit('update:modelValue', $event.target.value)"
        />
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
    type: {                  
      type: String,
      default: "text",
    },
    placeholder: String,     
    disabled: {            
      type: Boolean,
      default: false,
    },
    error: String,         
    icon: Boolean,         
  });
  </script>
  
  <style scoped>
  </style>
  