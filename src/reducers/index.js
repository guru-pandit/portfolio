import { combineReducers } from "redux";
import projectReducer from "./projectReducer.js";
import educationReducer from "./educationReducer";
import skillReducer from "./skillReducer";
import messageReducer from "./messageReducer";

const allReducers = combineReducers({
  projects: projectReducer,
  educations: educationReducer,
  skills: skillReducer,
  message: messageReducer,
});

export default allReducers;
