const mutations = {
  SET_INDIVIDUAL_RESULTS(state, results) {
    state.individualResults = results;
  },
  SET_AGEGROUP_RESULTS(state, results) {
    state.ageGroupResults = results;
  },
  SET_TEAM_RESULTS(state, results) {
    state.teamResults = results;
  }
};

export default mutations;
