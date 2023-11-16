import { GetMenusOptions, MenuState } from "@/types";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: MenuState = {
  items: [],
  isLoading: false,
  error: null,
};

export const getMenus = createAsyncThunk(
  "menu/getMenus",
  async (options: GetMenusOptions, thunkAPI) => {
    const { locationId, onError, onSuccess } = options;
    try {
      const response = await fetch(
        `${config.apiBaseUrl}/menus?locationId=${locationId}`
      );
      const menus = await response.json();
      thunkAPI.dispatch(setMenus(menus));
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenus: (store, action) => {
      store.items = action.payload;
    },
  },
});
export const { setMenus } = menuSlice.actions;
export default menuSlice.reducer;
