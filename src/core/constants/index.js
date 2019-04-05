export const constants = Object.freeze({
  APP_NAME: 'StudyDiary',

  API_URL_BASKED: 'https://api...',

  PATCH_URL_HOME: '/',
  PATCH_URL_USERS: '/users',
  PATCH_URL_USER: '/users/:id',
  PATCH_URL_EDIT_USER: '/users/:id/edit',
  PATCH_URL_SETTINGS: '/users/:id/settings',
  PATCH_URL_MESSAGE: '/users/:id/message',
  PATCH_URL_NOTIFICATION: '/users/:id/notification',
  PATCH_URL_ABOUT: '/about',
  PATCH_URL_TERM_OF_USE: '/term_of_use',
  PATCH_URL_PRIVACY_POLICY: '/privacy_policy',
  PATCH_URL_MOBILE_APPS: '/mobile_apps',

  AUTH_TOKEN: 'token',
  COOKIE_MAX_AGE: 1000 * 60 * 60 * 24 * 365,
  SETTINGS: 'settings',
  LANGUAGE_COOKIE_NAME: 'language',
  LANGUAGE_UK: 'uk',
  LANGUAGE_RU: 'ru',
  LANGUAGE_EN: 'en',
  SUPPORTED_LANGUAGES: ['uk', 'ru', 'en'],
  DEFAULT_LANGUAGE: 'uk',
});
