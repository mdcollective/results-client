<template>
  <v-container>
    <v-row class="text-center" align="center">
      <v-col class="text-center">
        <PageHeading title="Leagues" />
        <div v-if="leagues.length > 0">
          <div v-for="league in leagues" :key="league.id">
            <v-btn
              text
              large
              :block="true"
              :outlined="true"
              @click="leagueClicked(league)"
            >{{ league.name }}</v-btn>
          </div>
        </div>
        <div v-if="leagues.length === 0" class="progress">
          <v-progress-circular class="progress-spinner" size="64" indeterminate color="primary"></v-progress-circular>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PageHeading from "../Layout/PageHeading";

export default {
  name: "Leagues",
  components: {
    PageHeading
  },
  computed: {
    ...mapGetters(["leagues", "loadingLeagues"])
  },
  methods: {
    leagueClicked: function(league) {
      console.log(league);
      this.setSelectedLeague(league);
      this.setSelectedSeasons(league.seasons);
      this.$router.push("/seasons");
    },
    ...mapActions(["setSelectedLeague", "setSelectedSeasons", "getLeagues"])
  },
  created() {
    this.getLeagues();
  }
};
</script>
<style lang="scss">
button {
  margin: 10px;
}

.progress {
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-spinner {
  margin-top: 100px;
}
</style>
