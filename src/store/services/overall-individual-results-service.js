import axios from "axios";
import axiosRetry from "axios-retry";

const api = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

axiosRetry(api, {
  retryDelay: axiosRetry.exponentialDelay
});

export default {
  getBy(seasonId, gender, discipline) {
    return api.get(
      `https://overallindividualresultsapi.azurewebsites.net/api/overallindividualresults?seasonid=${seasonId}&gender=${gender}&discipline=${discipline}`
    );
  }
};