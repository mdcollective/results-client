import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  getBy(raceId, gender, discipline) {
    return api.get(
      `https://individualresultsapi.azurewebsites.net/api/individualresults?raceid=${raceId}&gender=${gender}&discipline=${discipline}`
    );
  }
};