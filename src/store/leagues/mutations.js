const mutations = {
  SET_SELECTED_LEAGUE(state, league) {
    state.selectedLeague = league;
  },
  SET_SELECTED_SEASON(state, season) {
    state.selectedSeason = season;
  },
  SET_SELECTED_SEASONS(state, seasons) {
    state.selectedSeasons = seasons;
  },
  SET_SELECTED_RACE(state, race) {
    state.selectedRace = race;
  },
  SET_SELECTED_RACES(state, races) {
    state.selectedRaces = races;
  },
  SET_SELECTED_RESULT(state, result) {
    state.selectedResult = result;
  },
  SET_LEAGUES(state, leagues) {
    state.leagues = leagues;
  }
};

export default mutations;