<template>
  <v-container class="races-container">
    <v-row class="text-center" align="center">
      <v-col class="text-center">
        <PageHeading title="Races" origin="seasons" />
        <div v-for="race in selectedRaces" :key="race.Id">
          <v-btn
            text
            large
            :block="true"
            :outlined="true"
            @click="raceClicked(race)"
            >{{ race.Name }}</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PageHeading from "../Layout/PageHeading";

export default {
  name: "Races",
  components: {
    PageHeading
  },
  computed: {
    ...mapGetters(["selectedRaces"])
  },
  methods: {
    raceClicked: function(race) {
      this.setSelectedRace(race);
      this.$router.push("/results");
    },
    ...mapActions(["setSelectedRace"])
  }
};
</script>

<style lang="scss" scoped>
.races-container {
  margin-bottom: 50px;
}
</style>
