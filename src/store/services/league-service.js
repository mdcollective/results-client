import axios from "axios";
import axiosRetry from "axios-retry";

const api = axios.create({});

axiosRetry(api, {
  retryDelay: axiosRetry.exponentialDelay
});

export default {
  get() {
    return api.get("https://leagueapiv2.azurewebsites.net/api/leagues");
  }
};