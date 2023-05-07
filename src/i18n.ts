import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationRu from './resources/locales/ru/translation.json';
import translationEn from './resources/locales/en/translation.json';

const resources = {
	ru: {
		translation: translationRu,
	},
	en: {
		translation: translationEn,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'ru',
});

export default i18n;
