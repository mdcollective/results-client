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

import { mapGetters, mapActions } from "vuex";

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
  methods: {
    ...mapActions(["clearResults"])
  },
  computed: {
    ...mapGetters(["selectedResult"])
  },
  beforeRouteLeave(to, from, next) {
    this.clearResults();
    next();
  }
};
</script>

<style lang="scss" scoped>
.result-container {
  margin-bottom: 50px;
}
</style>
