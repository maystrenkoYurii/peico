import { push } from 'connected-react-router';

import { getLocationRouterWithReselect } from '../../../../../../core/functions/selectors';

import { put, select } from 'redux-saga/effects';

export function* callRouterLinkWorker({ payload: link }) {
  const location = yield select(state => getLocationRouterWithReselect(state));
  const { pathname } = location;
  if (pathname !== link) {
    yield put(push(link));
  }
}
