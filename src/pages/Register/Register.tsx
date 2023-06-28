import React, { useState } from "react";
import { useCreateUserMutation } from "../../redux/redux.query";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../redux/redux.reducers";
import { addToken } from "../../redux/redux.reducers";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import {
  Container,
  FormWrpaer,
  InputWraper,
  InputElement,
  SubmitBtn,
} from "./Register.style";
import { useSelector } from "react-redux";
import { selectTheme } from "../../utils/themeSelectors";

export const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const theme = useSelector(selectTheme);
  const dispatch = useAppDispatch();
  const [mutate, { data, isLoading, isError, error }] = useCreateUserMutation();
  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value.trim());
  };
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim());
  };
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());
  };
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name.length);
    console.log(email.length);
    if (name.length === 0 || email.length === 0) {
      toast.error("Enter user data");
      return;
    }
    if (password.length < 7) {
      toast.error("Password length must be 7 or more symbols");
      return;
    }
    const newUser = { name, email, password };
    try {
      await mutate(newUser);
      if (data) {
        dispatch(addToken(data.token));
        toast.success("Register successfull");
      }
      if (isError && error) {
        const fetchError = error as FetchBaseQueryError;
        if (fetchError.status === 400) {
          toast.error("User with that email is already exist");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <form onSubmit={handleRegister}>
        <FormWrpaer>
          <InputWraper theme={theme}>
            Name
            <InputElement
              id="name-input"
              type="text"
              autoComplete="off"
              value={name}
              onChange={nameHandler}
            />
          </InputWraper>
          <InputWraper theme={theme}>
            Email
            <InputElement
              id="email-input"
              type="email"
              autoComplete="off"
              value={email}
              onChange={emailHandler}
            />
          </InputWraper>
          <InputWraper theme={theme}>
            Password
            <InputElement
              id="password-input"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={passwordHandler}
            />
          </InputWraper>
          <SubmitBtn type="submit" disabled={isLoading} theme={theme}>
            {isLoading ? "Registering..." : "Register"}
          </SubmitBtn>
        </FormWrpaer>
      </form>
    </Container>
  );
};
