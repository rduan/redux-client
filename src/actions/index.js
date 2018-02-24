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
        browserHistory.push('/feature');
        localStorage.setItem('token', res.data.token);
      })
      .catch(()=>{
        dispatch({type: types.UNAUTH_USER})
      });
  //   dispatch()
  }




  // if request is bad, show an error
}