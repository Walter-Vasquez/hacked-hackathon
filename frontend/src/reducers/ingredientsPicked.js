import { createSlice } from "@reduxjs/toolkit";

const ingredientsPickedSlice = createSlice({
  name: "ingredientsPicked",
  initialState: [],
  reducers: {
    addIngredient(state, action) {
      return [...state, action.payoad];
    },
  },
});

export default ingredientsPickedSlice.reducer;
