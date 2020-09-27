const state = {
  individualResults: [],
  teamResults: [],
  ageGroupResults: [],
  overallIndividualResults: [],
  overallTeamResults: [],
  results: [{
      name: "Men's Alpine - Individual",
      type: "IndividualResults",
      category: "individual",
      gender: "m",
      discipline: "a",
      id: "1"
    },
    {
      name: "Women's Alpine - Age Group",
      type: "AgeGroupResults",
      category: "agegroup",
      gender: "f",
      discipline: "a",
      id: "2"
    },
    {
      name: "Men's Snowboard - Individual",
      type: "IndividualResults",
      category: "individual",
      gender: "m",
      discipline: "s",
      id: "11"
    },
    {
      name: "Women's Snowboard - Age Group",
      type: "AgeGroupResults",
      category: "agegroup",
      gender: "f",
      discipline: "s",
      id: "22"
    },
    {
      name: "Men's Tele - Individual",
      type: "IndividualResults",
      category: "individual",
      gender: "m",
      discipline: "t",
      id: "111"
    },
    {
      name: "Women's Tele - Age Group",
      type: "AgeGroupResults",
      category: "agegroup",
      gender: "f",
      discipline: "t",
      id: "222"
    },
    {
      name: "Team Results",
      type: "TeamResults",
      category: "team",
      gender: null,
      discipline: null,
      id: "3"
    },
    {
      name: "Men's Alpine - Individual Overall",
      type: "OverallIndividualResults",
      category: "overall",
      gender: "m",
      discipline: "a",
      id: "4"
    },
    {
      name: "Women's Alpine - Individual Overall",
      type: "OverallIndividualResults",
      category: "overall",
      gender: "f",
      discipline: "a",
      id: "5"
    },
    {
      name: "Men's Snowboard - Individual Overall",
      type: "OverallIndividualResults",
      category: "overall",
      gender: "m",
      discipline: "s",
      id: "44"
    },
    {
      name: "Women's Snowboard - Individual Overall",
      type: "OverallIndividualResults",
      category: "overall",
      gender: "f",
      discipline: "s",
      id: "55"
    },
    {
      name: "Men's Tele - Individual Overall",
      type: "OverallIndividualResults",
      category: "overall",
      gender: "m",
      discipline: "t",
      id: "444"
    },
    {
      name: "Women's Tele - Individual Overall",
      type: "OverallIndividualResults",
      category: "overall",
      gender: "f",
      discipline: "t",
      id: "555"
    },
    {
      name: "Team Overall",
      type: "OverallTeamResults",
      category: "overall",
      gender: null,
      discipline: null,
      id: "6"
    }
  ]
};

export default state;