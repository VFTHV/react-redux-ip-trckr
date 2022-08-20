import { FETCH_IP_OR_DOMAIN } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_IP_OR_DOMAIN:
      return action.payload;
    default:
      return state;
  }
};
