import { asyncTypes } from './asyncTypes';

export const userActionsAsync = Object.freeze({
  setFetchSignInAsync: state => ({
    type: asyncTypes.SET_FETCH_SIGN_IN_ASYNC,
    payload: state,
  }),
  setFetchProfileAsync: () => ({
    type: asyncTypes.SET_FETCH_PROFILE_ASYNC,
  }),
});
