import { RootState } from "../redux/redux.store";
export const selectTheme = (state: RootState) => state.contactBook.theme;
