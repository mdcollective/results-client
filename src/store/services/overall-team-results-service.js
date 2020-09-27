import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  getBy(seasonId) {
    return api.get(
      `https://resultsapiv3.azurewebsites.net/api/seasons/${seasonId}/results/overall/team`
    );
  }
};
