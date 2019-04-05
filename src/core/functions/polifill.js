import IntlPolyfill from 'intl';
import IntlLocalesSupported from 'intl-locales-supported';

import { constants } from '../constants';

const localesMyAppSupports = [
  constants.LANGUAGE_EN,
  constants.LANGUAGE_RU,
  constants.LANGUAGE_UK,
];

if (global.Intl) {
  if (!IntlLocalesSupported(localesMyAppSupports)) {
    Intl.NumberFormat = IntlPolyfill.NumberFormat;
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
  }
} else {
  global.Intl = IntlPolyfill;
}
