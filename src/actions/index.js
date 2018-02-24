import reduxThunk from 'redux-thunk'
import axios from 'axios'
import { browserHistory } from 'react-router'

import * as types from './types';

const ROOT_URL = 'http://localhost:3090'


export function signinUser({email, password}) {
  // submit to server
  // -update state to indicate user is authenticated
  // - save the jwt token
  // - redirect to route '/feature

  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then((res)=> {
        console.log('========= res',res);

        dispatch({type: types.AUTH_USER})
        localStorage.setItem('token', res.data.token);

        browserHistory.push('/feature');
      })
      .catch(()=>{
        // console.log('+++++++++, catch');
        dispatch(authError('Bad Login info'));
      });
  //   dispatch()
  }
  // if request is bad, show an error
}

function authError(error) {
  // console.log('========== authError dispatched')
  return {
    type: types.AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  
  return {
    type: types.UNAUTH_USER
  }
}