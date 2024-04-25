import { Resource } from 'i18next';
import { LanguageCodes, Languages } from 'common/constants/languages';
// eslint-disable-next-line
import enJSON from 'common/localization/locales/en_US.json';
// eslint-disable-next-line
import deJSON from 'common/localization/locales/de_DE.json';

export const languageResources: Resource = {
  [Languages.en]: {
    translation: enJSON,
  },
  [Languages.de]: {
    translation: deJSON,
  },
};

export const languageFromLanguageCode = {
  [LanguageCodes.en]: Languages.en,
  [LanguageCodes.de]: Languages.de,
};

export const languageCodeFromLanguage = {
  [Languages.en]: LanguageCodes.en,
  [Languages.de]: LanguageCodes.de,
};
