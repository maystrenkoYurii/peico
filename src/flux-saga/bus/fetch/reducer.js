import { combineReducers } from 'redux';

import { userReducer as user } from './users/reducers';

export const fetchReducer = () =>
  combineReducers({
    user,
  });
