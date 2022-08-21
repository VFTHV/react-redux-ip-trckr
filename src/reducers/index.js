import { combineReducers } from "redux";
import ipfyReducer from "./ipfyReducer";

import { reducer as formReducer } from "redux-form";

export default combineReducers({
  ipfy: ipfyReducer,

  form: formReducer,
});
