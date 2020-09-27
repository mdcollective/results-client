<template>
  <div>
    <v-simple-table v-if="results.length > 0" fixed-header height="600px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Position</th>
            <th class="text-left">Name</th>
            <th class="text-left">Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="result in results" :key="result.TeamId">
            <td>x</td>
            <td>{{ result.TeamFullName }} ({{ result.TeamShortName }})</td>
            <td>{{ result.TotalPoints }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <div v-if="results.length === 0" class="progress">
      <v-progress-circular class="progress-spinner" size="64" indeterminate color="primary"></v-progress-circular>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "OverallTeamResults",
  computed: {
    ...mapGetters({ results: "overallTeamResults" })
  }
};
</script>

<style lang="scss" scoped>
.progress {
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-spinner {
  margin-top: 100px;
}
</style>