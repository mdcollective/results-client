import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  getBy(seasonId, gender, discipline) {
    return api.get(
      `https://overallindividualresultsapi.azurewebsites.net/api/overallindividualresults?seasonid=${seasonId}&gender=${gender}&discipline=${discipline}`
    );
  }
};