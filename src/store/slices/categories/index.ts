import { createSlice } from "@reduxjs/toolkit"
import { ICategoriesState } from "./types";

import mockCategories from "resources/mock/categoriesData";

const initialState: ICategoriesState = {
  categoriesList: mockCategories,
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {}
})

export default categoriesSlice.reducer;