<template>
  <v-app>
    <Header />
    <Home />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Home from "./views/Home.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Home,
    Header,
    Footer,
  },
};
</script>
