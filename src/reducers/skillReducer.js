const initState = [
  {
    id: 1,
    name: "HTML 5",
    icon: "fab fa-html5",
    progress: "90%",
  },
  {
    id: 2,
    name: "CSS 3",
    icon: "fab fa-css3-alt",
    progress: "85%",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "fab fa-js-square",
    progress: "75%",
  },
  {
    id: 4,
    name: "SASS",
    icon: "fab fa-sass",
    progress: "70%",
  },
  {
    id: 5,
    name: "React JS",
    icon: "fab fa-react",
    progress: "75%",
  },
  {
    id: 6,
    name: "Bootstrap",
    icon: "fab fa-bootstrap",
    progress: "80%",
  },
];

const skillReducer = (state = initState, action) => {
  return state;
};

export default skillReducer;
