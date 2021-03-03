const initState = [
  {
    id: 1,
    year: "2017 - 2020",
    stream: "BE in Electronics & Telecommunication",
    university: "University of Mumbai",
    info:
      "Completed the BE from Rajendra Mane College of Engineering and Technology, Deorukh with 73% marks.",
  },
  {
    id: 2,
    year: "2013 - 2016",
    stream: "Diploma in Electronics & Telecommunication",
    university: "MSBTE",
    info:
      "Completed the Diploma in Engineering from Government Polytechnic, Ratnagiri with 73% marks.",
  },
  {
    id: 3,
    year: "2011 - 2013",
    stream: "HSC - Science",
    university: "Konkan Board",
    info:
      "Completed the Higher Secondary education from Junior College, Nive, Deorukh with 55% marks.",
  },
  {
    id: 4,
    year: "2010 - 2011",
    stream: "SSC",
    university: "Kolhapur Board",
    info:
      "Completed the Secondary education from SKPM Highschool, Kolambe, Sangameshwar with 88% marks.",
  },
];

const educationReducer = (state = initState, action) => {
  return state;
};

export default educationReducer;
