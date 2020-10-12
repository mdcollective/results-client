import axios from "axios";

const api = axios.create({
  // headers: {
  //   "Content-Type": "application/json"
  // }
});

export default {
  get() {
    return api.get(
      "https://leagueapiv2.azurewebsites.net/api/LeagueHttpTrigger"
    );
  }
};