<template>
  <div class="page-heading">
    <div class="back-nav">
      <v-btn
        v-if="origin"
        class="mx-2"
        fab
        outlined
        small
        color="indigo"
        @click="backClicked"
      >
        <v-hover
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            width="18px"
            height="18px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
            /></svg
        ></v-hover>
      </v-btn>
    </div>
    <div class="page-title">
      <h1>{{ title }}</h1>
    </div>
    <div class="forward-nav"></div>
  </div>
</template>

<script>
export default {
  name: "PageHeading",
  props: ["title", "origin"],
  methods: {
    backClicked() {
      console.log(this.title);
      console.log(this.origin);
      this.$router.push(this.origin);
    }
  },
  mounted() {
    console.log(this.origin);
  }
};
</script>

<style lang="scss" scoped>
.page-heading {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.back-nav {
  display: flex;
  justify-items: flex-start;
  align-items: center;
}

.page-title {
  justify-self: center;
  display: flex;
  align-items: center;
}
</style>
