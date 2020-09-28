<template>
  <v-container class="seasons-container">
    <v-row class="text-center" align="center">
      <v-col class="text-center">
        <PageHeading title="Seasons" origin="/" />
        <div v-for="season in selectedSeasons" :key="season.id">
          <v-btn
            text
            large
            :block="true"
            :outlined="true"
            @click="seasonClicked(season)"
          >{{ season.name }}</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PageHeading from "../Layout/PageHeading";

export default {
  name: "Seasons",
  components: {
    PageHeading
  },
  computed: {
    ...mapGetters(["selectedSeasons"])
  },
  methods: {
    seasonClicked: function(season) {
      this.setSelectedSeason(season);
      this.setSelectedRaces(season.races);
      this.$router.push("/races");
    },
    ...mapActions(["setSelectedSeason", "setSelectedRaces"])
  }
};
</script>

<style lang="scss" scoped>
.seasons-container {
  margin-bottom: 50px;
}
</style>
