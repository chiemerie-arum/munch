<template>
  <v-app>
    <Header />
    <v-main class="pt-4">
      <router-view :key="$route.fullPath"></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss"></style>
