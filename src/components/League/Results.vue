<template>
  <v-container class="results-container">
    <v-row class="text-center" align="center">
      <v-col class="text-center">
        <PageHeading title="Results" origin="races" />
        <div v-for="result in results" :key="result.id">
          <v-btn
            text
            large
            :block="true"
            :outlined="true"
            @click="resultClicked(result)"
            >{{ result.name }}</v-btn
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
  name: "Results",
  components: {
    PageHeading
  },
  computed: {
    ...mapGetters(["results", "selectedRace"])
  },
  methods: {
    resultClicked: function(result) {
      console.log(result);
      this.setSelectedResult(result);

      const type = result.type.toLowerCase();
      if (type === "individualresults") {
        console.log(result);
        this.getIndividualResults({
          raceId: this.selectedRace.Id,
          gender: result.gender,
          discipline: result.discipline
        });
      } else if (type === "agegroupresults") {
        this.getAgeGroupResults({
          raceId: this.selectedRace.Id,
          gender: result.gender,
          discipline: result.discipline
        });
      } else if (type === "teamresults") {
        this.getTeamResults(this.selectedRace.Id);
      } else {
        console.log("error");
      }

      this.$router.push("/result");
    },
    ...mapActions([
      "setSelectedResult",
      "getIndividualResults",
      "getAgeGroupResults",
      "getTeamResults"
    ])
  }
};
</script>

<style lang="scss" scoped>
.results-container {
  margin-bottom: 50px;
}
</style>
