import axios from 'axios';

import * as constants from '../constants';

export function openTwitterLogin() {
  return (dispatch) => {
    return axios.get("http://localhost:4000/api/auth/twitter").then((response) => {
      window.location = response.data.url;
    });
  };
};

export function login(oauth_token, oauth_verifier) {
  return (dispatch) => {
    return axios.post(
      "http://localhost:4000/api/auth/twitter/signin",
      {
        oauth_token:    oauth_token,
        oauth_verifier: oauth_verifier
      }
    ).then((response) => {
      dispatch({
        type: constants.LOG_IN, payload: response.data
      });
    }).catch((response) => {
      dispatch({
        type: constants.LOG_OUT
      });
    });
  };
};
