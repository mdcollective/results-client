import ageGroupResultsService from "../services/age-group-results-service";
import individualResultsService from "../services/individual-results-service";
import teamResultsService from "../services/team-results-service";
import overallTeamResultsService from "../services/overall-team-results-service";
import overallIndividualResultsService from "../services/overall-individual-results-service";

const actions = {
  async getIndividualResults(context, { raceId, gender, discipline }) {
    console.log("action");
    const response = await individualResultsService.getBy(
      raceId,
      gender,
      discipline
    );
    const results = response.data;
    const sortedResults = results.sort((a, b) => (a.Time > b.Time ? 1 : -1));

    context.commit("SET_INDIVIDUAL_RESULTS", sortedResults);
    console.log(sortedResults);
  },
  async getAgeGroupResults(context, { raceId, gender, discipline }) {
    const response = await ageGroupResultsService.getBy(
      raceId,
      gender,
      discipline
    );
    const results = response.data;
    const sortedResults = results.sort((a, b) =>
      a.AgeGroup > b.AgeGroup ? 1 : -1
    );
    context.commit("SET_AGEGROUP_RESULTS", sortedResults);
    console.log(results);
  },
  async getTeamResults(context, raceId) {
    const response = await teamResultsService.getBy(raceId);
    const results = response.data;
    const sortedResults = results.sort((a, b) =>
      a.TeamPoints > b.TeamPoints ? -1 : 1
    );
    context.commit("SET_TEAM_RESULTS", sortedResults);
    console.log(sortedResults);
  },
  async getOverallTeamResults(context, seasonId) {
    const response = await overallTeamResultsService.getBy(seasonId);
    const results = response.data;
    const sortedResults = results.sort((a, b) => 
      a.TotalPoints > b.TotalPoints ? -1 : 1);
    context.commit("SET_OVERALL_TEAM_RESULTS", sortedResults);
    console.log(sortedResults);
  },
  async getOverallIndividualResults(context, { seasonId, gender, discipline }) {
    const response = await overallIndividualResultsService.getBy(seasonId, gender, discipline);
    const results = response.data;
    const sortedResults = results.sort((a, b) => 
      a.TotalPoints > b.TotalPoints ? -1 : 1);
    context.commit("SET_OVERALL_INDIVIDUAL_RESULTS", sortedResults);
    console.log(sortedResults);
  },
  async getResults({ getters, dispatch }, result) {

    const type = result.type.toLowerCase();
    if (type === "individualresults") {
      console.log(result);
      dispatch("getIndividualResults", {
        raceId: getters.selectedRace.Id,
        gender: result.gender,
        discipline: result.discipline
      });
    } else if (type === "agegroupresults") {
      dispatch("getAgeGroupResults", {
        raceId: getters.selectedRace.Id,
        gender: result.gender,
        discipline: result.discipline
      });
    } else if (type === "teamresults") {
      dispatch("getTeamResults", getters.selectedRace.Id);
    } else if (type === "overallteamresults") {
      dispatch("getOverallTeamResults", getters.selectedSeason.Id);
    } else if (type === "overallindividualresults") {
      dispatch("getOverallIndividualResults", {
        seasonId: getters.selectedSeason.Id,
        gender: result.gender,
        discipline: result.discipline
      });
    } else {
      console.log("error");
    }
  }
};

export default actions;
