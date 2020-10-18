<template>
  <v-carousel cycle height="230px" width="100%" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(image, i) in images" :key="i">
      <v-sheet height="100%">
        <v-row class="fill-height" align="center" justify="center">
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
img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>
