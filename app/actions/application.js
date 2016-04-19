import axios from 'axios';

import {LOG_IN, LOG_OUT} from '../constants';

export function openTwitterLogin() {
  return (dispatch) => {
    return axios.get(
      "http://localhost:4000/api/auth/twitter"
    ).then((response) => {
      console.log(response);
      return dispatch({
        type: LOG_IN, data: response.data
      });
    });
  };
};

export function login(oauth_token, oauth_verifier) {
  return (dispatch) => {
    return axios.post(
      "http://localhost:4000/api/auth/twitter/signin",
      {
        oauth_token: oauth_token, oauth_verifier: oauth_verifier
      }
    ).then((response) => {
      console.log(response);
      displatch({
        type: LOG_IN, data: response.data
      });
    }).catch((response) => {
      dispatch({
        type: 'hoge'
      });
    });
  };
};
