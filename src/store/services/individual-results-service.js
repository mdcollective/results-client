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
  getBy(raceId, gender, discipline) {
    return api.get(
      `https://individualresultsapi.azurewebsites.net/api/individualresults?raceid=${raceId}&gender=${gender}&discipline=${discipline}`
    );
  }
};