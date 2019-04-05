import { userActions } from '../../actions';
import { fetchActionsAsync } from '../../../../ui/fetch/saga/asyncActions';

import { types } from '../../types';

import { put, delay } from 'redux-saga/effects';

export function* callFetchProfileWorker() {
  try {
    yield put(userActions.setFetchProfileRequest());
    yield put(
      fetchActionsAsync.setFetchStateAsync({
        isFetch: true,
        type: types.SET_FETCH_PROFILE_REQUEST,
      }),
    );

    console.log('START FETCH PROFILE');

    yield delay(1000);

    console.log('COMPLETE FETCH PROFILE');

    yield put(userActions.setFetchProfileSuccess({ profile: {} }));
  } catch (error) {
    yield put(userActions.setFetchProfileError());
    yield put(
      fetchActionsAsync.setFetchEmitErrorAsync({
        error: error,
        type: types.SET_FETCH_PROFILE_REQUEST,
      }),
    );
  } finally {
    yield put(
      fetchActionsAsync.setFetchStateAsync({
        type: types.SET_FETCH_PROFILE_REQUEST,
      }),
    );
  }
}
