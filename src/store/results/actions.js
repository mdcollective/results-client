import ageGroupResultsService from "../services/age-group-results-service";
import individualResultsService from "../services/individual-results-service";
import teamResultsService from "../services/team-results-service";

const actions = {
  async getIndividualResults(context, {
    raceId,
    gender,
    discipline
  }) {
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
  }
};

export default actions;