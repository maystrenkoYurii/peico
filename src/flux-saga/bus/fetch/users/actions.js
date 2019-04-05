import { types } from './types';

export const userActions = Object.freeze({
  setFetchSignInRequest: () => ({
    type: types.SET_FETCH_SIGN_IN_REQUEST,
  }),
  setFetchSignInSuccess: state => ({
    type: types.SET_FETCH_SIGN_IN_SUCCESS,
    payload: state,
  }),
  setFetchSignInError: () => ({
    type: types.SET_FETCH_SIGN_IN_ERROR,
  }),

  setFetchProfileRequest: () => ({
    type: types.SET_FETCH_PROFILE_REQUEST,
  }),
  setFetchProfileSuccess: state => ({
    type: types.SET_FETCH_PROFILE_SUCCESS,
    payload: state,
  }),
  setFetchProfileError: () => ({
    type: types.SET_FETCH_PROFILE_ERROR,
  }),
});
