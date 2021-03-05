import { SET_USER_DETAILS, API, FETCH_USER_DETAILS } from "./types";

export function fetchUserDetails() {
  return apiAction({
    url: "https://jsonplaceholder.typicode.com/users",
    onSuccess: setUseretails,
    onFailure: () => console.log("Error occured loading users"),
    label: FETCH_USER_DETAILS
  });
}

function setUseretails(data) {
  return {
    type: SET_USER_DETAILS,
    payload: data
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}