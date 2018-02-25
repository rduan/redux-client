import * as types from '../actions/types';

export default function(state ={}, action) {
  switch (action.type) {
    case types.AUTH_USER:
      return {...state, authenticated: true, error:'' };
    case types.UNAUTH_USER:
      return { ...state, authenticated: false};
    case types.AUTH_ERROR:
      return { ...state, error: action.payload };
    case types.FETCH_MESSAGE: 
      return {...state, message: action.payload };
  }

  return state;
}