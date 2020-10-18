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
  getBy(raceId) {
    return api.get(
      `https://teamresultsapi.azurewebsites.net/api/teamresults?raceid=${raceId}`
    );
  }
};