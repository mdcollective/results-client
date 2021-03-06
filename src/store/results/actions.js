import ageGroupResultsService from "../services/age-group-results-service";
import individualResultsService from "../services/individual-results-service";
import teamResultsService from "../services/team-results-service";
import overallTeamResultsService from "../services/overall-team-results-service";
import overallIndividualResultsService from "../services/overall-individual-results-service";

const actions = {
  async clearResults(context) {
    context.commit("SET_INDIVIDUAL_RESULTS", []);
    context.commit("SET_AGEGROUP_RESULTS", []);
    context.commit("SET_TEAM_RESULTS", []);
    context.commit("SET_OVERALL_TEAM_RESULTS", []);
    context.commit("SET_OVERALL_INDIVIDUAL_RESULTS", []);
    context.commit("SET_OVERALL_TEAM_RESULTS", []);
  },
  async getIndividualResults(context, {
    raceId,
    gender,
    discipline
  }) {
    const response = await individualResultsService.getBy(
      raceId,
      gender,
      discipline
    );
    const results = response.data;
    const sortedResults = results.sort((a, b) => (a.time > b.time ? 1 : -1));

    context.commit("SET_INDIVIDUAL_RESULTS", sortedResults);
  },
  async getAgeGroupResults(context, {
    raceId,
    gender,
    discipline
  }) {
    const response = await ageGroupResultsService.getBy(
      raceId,
      gender,
      discipline
    );
    const results = response.data;
    const sortedResults = results.sort((a, b) =>
      a.ageGroup > b.ageGroup ? 1 : -1
    );
    context.commit("SET_AGEGROUP_RESULTS", sortedResults);
  },
  async getTeamResults(context, raceId) {
    const response = await teamResultsService.getBy(raceId);
    const results = response.data;
    const sortedResults = results.sort((a, b) =>
      a.teamPoints > b.teamPoints ? -1 : 1
    );
    context.commit("SET_TEAM_RESULTS", sortedResults);
  },
  async getOverallTeamResults(context, seasonId) {
    const response = await overallTeamResultsService.getBy(seasonId);
    const results = response.data;
    const sortedResults = results.sort((a, b) =>
      a.totalPoints > b.totalPoints ? -1 : 1);
    context.commit("SET_OVERALL_TEAM_RESULTS", sortedResults);
  },
  async getOverallIndividualResults(context, {
    seasonId,
    gender,
    discipline
  }) {
    const response = await overallIndividualResultsService.getBy(seasonId, gender, discipline);
    const results = response.data;
    const sortedResults = results.sort((a, b) =>
      a.totalPoints > b.totalPoints ? -1 : 1);
    context.commit("SET_OVERALL_INDIVIDUAL_RESULTS", sortedResults);
  },
  async getResults({
    getters,
    dispatch
  }, result) {

    const type = result.type.toLowerCase();
    if (type === "individualresults") {
      console.log(result);
      dispatch("getIndividualResults", {
        raceId: getters.selectedRace.id,
        gender: result.gender,
        discipline: result.discipline
      });
    } else if (type === "agegroupresults") {
      dispatch("getAgeGroupResults", {
        raceId: getters.selectedRace.id,
        gender: result.gender,
        discipline: result.discipline
      });
    } else if (type === "teamresults") {
      dispatch("getTeamResults", getters.selectedRace.id);
    } else if (type === "overallteamresults") {
      dispatch("getOverallTeamResults", getters.selectedSeason.id);
    } else if (type === "overallindividualresults") {
      dispatch("getOverallIndividualResults", {
        seasonId: getters.selectedSeason.id,
        gender: result.gender,
        discipline: result.discipline
      });
    } else {
      console.log("error");
    }
  }
};

export default actions;