import { types } from './types';

export const initialState = {
  appPageContentTitle: '',
  appOpenLanguage: false,
};

export const wrapperReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_APP_PAGE_CONTENT_TITLE:
      return {
        ...state,
        appPageContentTitle: action.payload,
      };

    case types.SET_APP_OPEN_LANGUAGE:
      return {
        ...state,
        appOpenLanguage: action.payload,
      };

    default:
      return state;
  }
};
