import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {
  // Define the types for the initial state here
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

const initialState: initialStateTypes = {
  // Define the initial state here
  isSidebarCollapsed: false,
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const {setIsDarkMode, setIsSidebarCollapsed} = globalSlice.actions;
