<template>
  <div>
    <div>
      <div v-for="ageGroup in results" :key="ageGroup.ageGroup" class="result">
        <h2>{{ ageGroup.ageGroup }}</h2>

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
                v-for="(result, index) in orderedResults(ageGroup.individualResults)"
                :key="result.racerId"
              >
                <td>{{ index + 1 }}</td>
                <td>{{ result.lastName }}, {{ result.firstName }}</td>
                <td>{{ result.time }}</td>
                <td>{{ result.racerPoints }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>

    <div v-if="results.length === 0" class="progress">
      <v-progress-circular class="progress-spinner" size="64" indeterminate color="primary"></v-progress-circular>
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
      return results.sort((a, b) => (a.time > b.time ? 1 : -1));
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  font-size: 1.125rem;
}

.result {
  padding-bottom: 50px;
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
