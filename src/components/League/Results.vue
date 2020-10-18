<template>
  <v-container class="results-container">
    <v-row class="text-center" align="center">
      <v-col class="text-center">
        <PageHeading title="Results" origin="races" />
        <div class="results-grid">
          <div v-for="result in results" :key="result.id">
            <v-btn
              class="result-btn"
              text
              large
              :block="true"
              :outlined="true"
              @click="resultClicked(result)"
              >{{ result.name }}</v-btn
            >
          </div>
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
    ...mapGetters(["results"])
  },
  methods: {
    resultClicked: function(result) {
      this.setSelectedResult(result);
      this.getResults(result);
      this.$router.push("/result");
    },
    ...mapActions(["getResults", "setSelectedResult"])
  }
};
</script>

<style lang="scss" scoped>
.results-container {
  margin-bottom: 50px;
}

.results-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}

.result-btn {
  border: 1px solid black;
  min-height: 100px;
  // padding: 0 0 !important;
  margin: 0;
  word-wrap: normal;
}

@media screen and (max-width: 768px) {
  .results-grid {
    grid-template-columns: 1fr;
  }
}
</style>
