import { asyncTypes } from './asyncTypes';
import { callFetchSignInWorker } from './workers/fetchSignIn';
import { callFetchProfileWorker } from './workers/fetchProfileById';

import { takeEvery } from 'redux-saga/effects';

export function* userWatchersSagas() {
  yield takeEvery(asyncTypes.SET_FETCH_SIGN_IN_ASYNC, callFetchSignInWorker);
  yield takeEvery(asyncTypes.SET_FETCH_PROFILE_ASYNC, callFetchProfileWorker);
}
