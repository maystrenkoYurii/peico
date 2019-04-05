import { userActions } from '../../actions';
import { fetchActionsAsync } from '../../../../ui/fetch/saga/asyncActions';

import { types } from '../../types';

import { put } from 'redux-saga/effects';

export function* callFetchSignInWorker() {
  try {
    yield put(userActions.setFetchSignInRequest());
    yield put(
      fetchActionsAsync.setFetchStateAsync({
        isFetch: true,
        type: types.SET_FETCH_SIGN_IN_REQUEST,
      }),
    );

    yield put(userActions.setFetchSignInSuccess());
  } catch (error) {
    yield put(userActions.setFetchSignInError());
    yield put(
      fetchActionsAsync.setFetchEmitErrorAsync({
        error: error,
        type: types.SET_FETCH_SIGN_IN_REQUEST,
      }),
    );
  } finally {
    yield put(
      fetchActionsAsync.setFetchStateAsync({
        type: types.SET_FETCH_SIGN_IN_REQUEST,
      }),
    );
  }
}
