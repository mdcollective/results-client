<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Leagues msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Leagues from "@/components/Leagues.vue";

export default {
  name: "Home",
  components: {
    Leagues
  }
};
</script>
