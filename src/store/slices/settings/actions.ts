import { PayloadAction } from '@reduxjs/toolkit';
import { ILanguageSwapping, ISettingsState } from './types';

export const changeAction = (
	state: ISettingsState,
	action: PayloadAction<ILanguageSwapping>
) => {
	state.language = action.payload.langId;
};
