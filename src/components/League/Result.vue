<template>
  <v-container class="result-container">
    <PageHeading :title="selectedResult.name" origin="results" />
    <component :is="selectedResult.type"></component>
  </v-container>
</template>

<script>
import PageHeading from "../Layout/PageHeading";
import IndividualResults from "../Results/IndividualResults";
import AgeGroupResults from "../Results/AgeGroupResults";
import TeamResults from "../Results/TeamResults";
import OverallTeamResults from "../Results/OverallTeamResults";
import OverallIndividualResults from "../Results/OverallIndividualResults";

import { mapGetters } from "vuex";

export default {
  name: "Result",
  components: {
    PageHeading,
    IndividualResults,
    AgeGroupResults,
    TeamResults,
    OverallTeamResults,
    OverallIndividualResults
  },
  computed: {
    ...mapGetters(["selectedResult"])
  }
};
</script>

<style lang="scss" scoped>
.result-container {
  margin-bottom: 50px;
}
</style>
