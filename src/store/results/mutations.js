const mutations = {
  SET_INDIVIDUAL_RESULTS(state, results) {
    state.individualResults = results;
  },
  SET_AGEGROUP_RESULTS(state, results) {
    state.ageGroupResults = results;
  },
  SET_TEAM_RESULTS(state, results) {
    state.teamResults = results;
  },
  SET_OVERALL_INDIVIDUAL_RESULTS(state, results) {
    state.overallIndividualResults = results;
  },
  SET_OVERALL_TEAM_RESULTS(state, results) {
    state.overallTeamResults = results;
  }
};

export default mutations;
