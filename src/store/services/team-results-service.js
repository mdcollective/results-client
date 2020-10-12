import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  getBy(raceId) {
    return api.get(
      `https://teamresultsapi.azurewebsites.net/api/teamresults?raceid=${raceId}`
    );
  }
};