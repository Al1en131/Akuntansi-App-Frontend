<script setup>
import { useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();
</script>

<template>
  <div>
    <Navbar v-if="!route.meta.noNavbarFooter" />
    <router-view />
    <Footer v-if="!route.meta.noNavbarFooter" />
  </div>
</template>
