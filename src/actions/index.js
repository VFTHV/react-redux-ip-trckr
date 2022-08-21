import ipfy from "../apis/ipfy";
import { FETCH_IP_OR_DOMAIN } from "./types";
import { domainOrIP } from "../functions/domainOrIP";

export const fetchIP = (input) => async (dispatch) => {
  const apiKey = "at_tcvPspf3lf41NHU5OjHX4QwonW964";
  let link = "";
  const hasDomain = domainOrIP(input);
  if (!input) {
    link = ``;
  } else if (hasDomain) {
    link = `&domain=${input}`;
  } else {
    link = `&ipAddress=${input}`;
  }
  try {
    const response = await ipfy.get(`country,city?apiKey=${apiKey}${link}`);

    dispatch({ type: FETCH_IP_OR_DOMAIN, payload: response.data });
  } catch (err) {
    dispatch({ type: FETCH_IP_OR_DOMAIN, payload: err });
  }
};
