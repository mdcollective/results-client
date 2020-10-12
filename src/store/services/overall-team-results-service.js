import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  getBy(seasonId) {
    return api.get(
      `https://overallteamresultapi.azurewebsites.net/api/overallteamresults?seasonid=${seasonId}`
    );
  }
};
