import _ from 'lodash';

import pkg from '../../../package.json';

import { constants } from '../constants/index';

export const getVersionApp = () => {
  return pkg.version || '0.0.0';
};

export const isClient = () => {
  return typeof window !== 'undefined';
};

export const isAuthenticatedUser = authUser => {
  return !!_.get(authUser, constants.AUTH_TOKEN);
};

export const isAuthenticatedInterface = authUser => {
  return isAuthenticatedUser(authUser);
};

export const isLoadingPage = (isFetch, type, typePage) => {
  return isFetch && type === typePage;
};

export const getIdAuthUser = authUser => {
  return _.get(authUser, 'user.id');
};

export const getUserPatch = (authUser, id) => {
  if (!isAuthenticatedInterface(authUser)) {
    return constants.PATCH_URL_HOME;
  } else {
    const realId = id || getIdAuthUser(authUser);
    return _.replace(constants.PATCH_URL_USER, ':id', realId);
  }
};
