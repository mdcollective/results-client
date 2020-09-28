import axios from "axios";

const api = axios.create({
  // headers: {
  //   "Content-Type": "application/json"
  // }
});

export default {
  get() {
    // return api.get("http://leagueapiv2.resortdataservices.com/api/leagues");
    // return api.get("https://leagueapiv3.azurewebsites.net/api/leagues");
    return api.get(
      "https://leagueapiv2.azurewebsites.net/api/LeagueHttpTrigger"
    );
  }
};