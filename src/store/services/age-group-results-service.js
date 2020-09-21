import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  getBy(raceId, gender, discipline) {
    return api.get(
      // `http://resultapi.resortdataservices.com/api/races/${raceId}/results/individual?gender=${gender}&discipline=${discipline}`
      `https://resultsapiv3.azurewebsites.net/api/races/${raceId}/results/agegroups?gender=${gender}&discipline=${discipline}`
    );
  }
};