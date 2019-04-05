import { createSelector } from 'reselect';

const getFetching = state => state.ui.fetch.fetching;

export const getFetchingWithReselect = createSelector(
  [getFetching],
  state => {
    return state;
  },
);

const getUser = state => state.fetch.user;

export const getUserWithReselect = createSelector(
  [getUser],
  state => {
    return state;
  },
);

const getActionRouter = state => state.router.action;

export const getActionRouterWithReselect = createSelector(
  [getActionRouter],
  state => {
    return state;
  },
);

const getLocationRouter = state => state.router.location;

export const getLocationRouterWithReselect = createSelector(
  [getLocationRouter],
  state => {
    return state;
  },
);

const getAppPageContentTitle = state => state.ui.wrapper.appPageContentTitle;

export const getAppPageContentTitleWithReselect = createSelector(
  [getAppPageContentTitle],
  state => {
    return state;
  },
);

const getSettingsApp = state => state.settings;

export const getSettingsAppWithReselect = createSelector(
  [getSettingsApp],
  state => {
    return state;
  },
);

const getAppLanguage = state => state.ui.settings.language.language;

export const getAppLanguageWithReselect = createSelector(
  [getAppLanguage],
  state => {
    return state;
  },
);

const getAppOpenLanguage = state => state.ui.wrapper.appOpenLanguage;

export const getAppOpenLanguageWithReselect = createSelector(
  [getAppOpenLanguage],
  state => {
    return state;
  },
);
