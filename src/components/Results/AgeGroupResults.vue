<template>
  <div>
    <div>
      <div v-for="ageGroup in results" :key="ageGroup.AgeGroup">
        <h2>{{ ageGroup.AgeGroup }}</h2>

        <v-simple-table v-if="results.length > 0" fixed-header>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Position</th>
                <th class="text-left">Name</th>
                <th class="text-left">Time</th>
                <th class="text-left">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="result in orderedResults(ageGroup.IndividualRacerResult)"
                :key="result.RacerId"
              >
                <td>x</td>
                <td>{{ result.LastName }}, {{ result.FirstName }}</td>
                <td>{{ result.Time }}</td>
                <td>{{ result.RacerPoints }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>

    <div v-if="results.length === 0" class="progress">
      <v-progress-circular
        class="progress-spinner"
        size="64"
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AgeGroupResults",
  computed: {
    ...mapGetters({ results: "ageGroupResults" })
  },
  methods: {
    orderedResults(results) {
      return results.sort((a, b) => (a.Time > b.Time ? 1 : -1));
    }
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
