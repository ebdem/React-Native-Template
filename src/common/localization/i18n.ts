import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Languages } from 'common/constants/languages';
import { getLastSelectedLanguage } from 'helpers/language';
import { languageResources } from 'helpers/languageResources';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: (callback: (lang: string) => void) => {
    const lastSelectedLang = getLastSelectedLanguage();
    callback(lastSelectedLang);
  },
  init: () => {},
  cacheUserLanguage: (lng: string) => {
    // save to storage
    AsyncStorage.setItem('language', lng);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    react: {
      useSuspense: false,
    },
    resources: languageResources,
    fallbackLng: Languages.en,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
