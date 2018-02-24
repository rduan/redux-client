import * as types from '../actions/types';

export default function(state ={}, action) {
  switch (action.type) {
    case types.AUTH_USER:
      return {...state, authenticated: true };
    case types.UNAUTH_USER:
      return { ...state, authenticated: false}
  }

  return state;
}