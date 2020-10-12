import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  getBy(raceId, gender, discipline) {
    return api.get(
      `https://agegroupresultsapi.azurewebsites.net/api/agegroupresults?raceid=${raceId}&gender=${gender}&discipline=${discipline}`
    );
  }
};