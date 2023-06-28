import React, { useState } from "react";
import { useGetUserMutation } from "../../redux/redux.query";
import { addToken, useAppDispatch } from "../../redux/redux.reducers";
import { toast } from "react-toastify";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { redirect } from "react-router-dom";
import {
  Container,
  FormWrpaer,
  InputWraper,
  InputElement,
  SubmitBtn,
} from "../Register/Register.style";
import { useSelector } from "react-redux";
import { selectTheme } from "../../utils/themeSelectors";

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [mutate, { isLoading, isError }] = useGetUserMutation();
  const theme = useSelector(selectTheme);
  const dispatch = useAppDispatch();

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim());
  };
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());
  };
  const handlerLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = { email, password };
    try {
      const response = await mutate(userData);
      if ("data" in response) {
        const {
          data: { token },
        } = response;
        dispatch(addToken(token));
        toast.success("Welcome");
        sessionStorage.setItem("token", token);
        redirect("/");
      }
    } catch (error) {
      if (isError) {
        const fetchError = error as FetchBaseQueryError;
        if (fetchError.status === 400) {
          toast.error("Email or password is wrong");
        }
        if (fetchError.status === 404) {
          toast.error("User not found");
        }
      }
    }
  };

  return (
    <Container>
      <form onSubmit={handlerLogin}>
        <FormWrpaer>
          <InputWraper theme={theme}>
            Email
            <InputElement
              id="standard-basic"
              type="email"
              onChange={emailHandler}
            />
          </InputWraper>
          <InputWraper theme={theme}>
            Password
            <InputElement
              id="standard-basic"
              type="password"
              onChange={passwordHandler}
            />
          </InputWraper>

          <SubmitBtn type="submit" disabled={isLoading} theme={theme}>
            {isLoading ? "Loading..." : "Login"}
          </SubmitBtn>
        </FormWrpaer>
      </form>
    </Container>
  );
};
