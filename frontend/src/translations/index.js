import { en } from './en';
import { hi } from './hi';
import { pa } from './pa';

export const translations = {
  en,
  hi,
  pa,
};

export const supportedLanguages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
];

export const getTranslation = (key, language = 'en') => {
  const lang = translations[language] || translations.en;
  return key.split('.').reduce((obj, k) => obj?.[k] || key, lang);
};

export const t = (key, lang = 'en') => getTranslation(key, lang);

export default translations;
