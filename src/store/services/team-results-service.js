import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  getBy(raceId) {
    return api.get(
      // `http://resultapi.resortdataservices.com/api/races/${raceId}/results/team`
      `https://resultsapiv3.azurewebsites.net/api/races/${raceId}/results/team`
    );
  }
};