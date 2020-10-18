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
  getBy(seasonId) {
    return api.get(
      `https://overallteamresultapi.azurewebsites.net/api/overallteamresults?seasonid=${seasonId}`
    );
  }
};