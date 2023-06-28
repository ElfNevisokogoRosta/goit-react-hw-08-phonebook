import React from "react";
import { FormComponent } from "./components/FormComponent";
import { ContactList } from "./components/ContactList";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/redux.store";
import { removeToken, useAppDispatch } from "../../redux/redux.reducers";
import { redirect } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import {
  useGetUserDataQuery,
  useLogOutMutation,
} from "../../redux/redux.query";
import {
  UserInfoContainer,
  UserInfoElement,
  NameContainer,
} from "./Styles/Home.styled";
import { SubmitBtn } from "../Register/Register.style";
import { selectTheme } from "../../utils/themeSelectors";
import { ToastContainer } from "react-toastify";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useSelector(selectTheme);
  const token = useSelector((state: RootState) => state.contactBook.token)!;
  const { data, isFetching } = useGetUserDataQuery(token);
  const [mutate] = useLogOutMutation();
  const logOuteHandler = async () => {
    try {
      await mutate(token);
      sessionStorage.clear();
      dispatch(removeToken());
      return redirect("/auth");
    } catch (error) {}
  };
  return (
    <div>
      {isFetching ? (
        <Audio />
      ) : (
        <UserInfoContainer>
          <UserInfoElement theme={theme}>
            Hello: <NameContainer>{data?.name}</NameContainer>
          </UserInfoElement>
          <UserInfoElement theme={theme}>{data?.email}</UserInfoElement>
          <SubmitBtn onClick={() => logOuteHandler()} theme={theme}>
            Logout
          </SubmitBtn>
        </UserInfoContainer>
      )}

      <FormComponent />
      <ContactList />
      <ToastContainer />
    </div>
  );
};
