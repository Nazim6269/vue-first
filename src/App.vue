<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/footer/FooterCt.vue'
import Navbar from './components/navbar/NavBar.vue'
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
