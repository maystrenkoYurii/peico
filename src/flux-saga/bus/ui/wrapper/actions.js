import { types } from './types';

export const uiActions = Object.freeze({
  setAppPageContentTitleState: state => ({
    type: types.SET_APP_PAGE_CONTENT_TITLE,
    payload: state,
  }),
  setAppOpenLanguageState: state => ({
    type: types.SET_APP_OPEN_LANGUAGE,
    payload: state,
  }),
});
