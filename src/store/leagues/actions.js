import leagueService from "../services/league-service";

const actions = {
  setSelectedLeague(context, league) {
    context.commit("SET_SELECTED_LEAGUE", league);
  },
  setSelectedSeason(context, season) {
    context.commit("SET_SELECTED_SEASON", season);
  },
  setSelectedSeasons(context, seasons) {
    const sortedSeasons = seasons.sort((a, b) => (a.id > b.id ? -1 : 1));
    context.commit("SET_SELECTED_SEASONS", sortedSeasons);
  },
  setSelectedRace(context, race) {
    context.commit("SET_SELECTED_RACE", race);
  },
  setSelectedRaces(context, races) {
    const sortedRaces = races.sort((a, b) => (a.id > b.id ? -1 : 1));
    context.commit("SET_SELECTED_RACES", sortedRaces);
  },
  setSelectedResult(context, result) {
    context.commit("SET_SELECTED_RESULT", result);
  },
  async getLeagues(context) {
    const response = await leagueService.get();
    context.commit("SET_LEAGUES", response.data);
  }
};

export default actions;