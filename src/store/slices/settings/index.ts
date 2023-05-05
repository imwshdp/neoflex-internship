import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ILanguageSwapping, ISettingsState, languages } from "./types";

const initialState: ISettingsState = {
  language: languages.ru,
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<ILanguageSwapping>) {
      state.language = action.payload.langId;
    }
  }
})

export const { changeLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;