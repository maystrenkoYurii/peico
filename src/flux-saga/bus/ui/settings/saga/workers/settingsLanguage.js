import { settingsActions } from '../../actions';

import { setSettings } from '../../../../../../core/functions/cookie';

import { getSettingsAppWithReselect } from '../../../../../../core/functions/selectors';

import { put, call, select } from 'redux-saga/effects';

export function* callSettingsLanguageWorker({ payload: state }) {
  const stateOld = yield select(state => getSettingsAppWithReselect(state));
  const stateNew = yield call(() => ({
    ...stateOld,
    language: state,
  }));
  yield call(setSettings, JSON.stringify(stateNew));
  yield put(settingsActions.setLanguageState(state));
}
