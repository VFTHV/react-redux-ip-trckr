import { combineReducers } from "redux";
import ipfyReducer from "./ipfyReducer";

export default combineReducers({
  ipfy: ipfyReducer,
});
