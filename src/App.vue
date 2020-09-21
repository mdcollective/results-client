<template>
  <v-app>
    <Header />

    <v-main>
      <Hero />
      <router-view> </router-view>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Footer from "./components/Layout/Footer";

export default {
  name: "App",

  components: {
    Header,
    Hero,
    Footer
  }
};
</script>
<style lang="scss">
</style>
