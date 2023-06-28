import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export interface ContactBookI {
  token: string;
  isLoggedIn: boolean;
  theme: theme;
}
interface theme {
  mainColor: string;
  accent: string;
  backGround: string;
  textColor: string;
  accentTextcolor: string;
}
export interface ContactI {
  name: string;
  number: string;
  id?: string;
}

const initialState: ContactBookI = {
  token: "",
  isLoggedIn: false,
  theme: {
    mainColor: "#CDF0EA",
    accent: "#A3E8E0",
    backGround: "#F9F9F9",
    textColor: "#2D033B",
    accentTextcolor: "#FAF4B7",
  },
};

export const contactBookSlice = createSlice({
  name: "contactBook",
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const { addToken, removeToken } = contactBookSlice.actions;
export const contactBookReducer = contactBookSlice.reducer;

export const useAppDispatch = () => useDispatch();
