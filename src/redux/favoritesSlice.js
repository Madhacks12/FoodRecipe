import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const recipe = action.payload;
      const existingIndex = state.favoriterecipes.findIndex(
        (favRecipe) => favRecipe.idFood === recipe.idFood
      );
      
      if (existingIndex >= 0) {
        // Remove from favorites if already exists
        state.favoriterecipes.splice(existingIndex, 1);
      } else {
        // Add to favorites if not exists
        state.favoriterecipes.push(recipe);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
