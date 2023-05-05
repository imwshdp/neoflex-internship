export enum languages {
  'ru',
  'en',
}

export interface ISettingsState {
  language: number;
}

export interface ILanguageSwapping {
  langId: number;
}