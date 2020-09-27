import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  getBy(seasonId, gender, discipline) {
    return api.get(
      `https://resultsapiv3.azurewebsites.net/api/seasons/${seasonId}/results/overall/individual?gender=${gender}&discipline=${discipline}`
    );
  }
};
