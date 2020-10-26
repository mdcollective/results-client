<template>
  <v-carousel
    class="hero-carousel"
    cycle
    width="100%"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(image, i) in images" :key="i">
      <v-sheet height="230px">
        <v-row class="carousel-row fill-height" align="center" justify="center">
          <div class="display-3">
            <img :src="image" alt />
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      images: [
        "https://raceleaguestorage.blob.core.windows.net/images/radvanyi.png",
        "https://raceleaguestorage.blob.core.windows.net/images/kristen.png"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.hero-carousel {
  max-height: 300px;
}

.carousel-row {
  background-color: white;
  border-bottom: none;
}

img {
  object-fit: fit;
  height: 100%;
  width: 100%;
}

.display-3 {
  width: 100%;
  height: 100%;
}
</style>
