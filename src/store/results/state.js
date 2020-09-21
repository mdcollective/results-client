const state = {
  individualResults: [],
  teamResults: [],
  ageGroupResults: [],
  results: [{
      name: "Men's Alpine - Individual",
      type: "IndividualResults",
      gender: "m",
      discipline: "a",
      id: "1"
    },
    {
      name: "Women's Alpine - Age Group",
      type: "AgeGroupResults",
      gender: "f",
      discipline: "a",
      id: "2"
    },
    {
      name: "Team Results",
      type: "TeamResults",
      gender: null,
      discipline: null,
      id: "13"
    }
  ]
};

export default state;