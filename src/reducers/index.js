import { combineReducers } from "redux";
import projectReducer from "./projectReducer.js";
import educationReducer from "./educationReducer";
import skillReducer from "./skillReducer";

const allReducers = combineReducers({
  projects: projectReducer,
  educations: educationReducer,
  skills: skillReducer,
});

export default allReducers;
