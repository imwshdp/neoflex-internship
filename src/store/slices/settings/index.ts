import { createSlice } from '@reduxjs/toolkit';
import { ISettingsState, languages } from './types';
import { changeAction } from './actions';

const initialState: ISettingsState = {
	language: languages.ru,
};

const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		changeLanguage(state, action) {
			changeAction(state, action);
		},
	},
});

export const { changeLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;
