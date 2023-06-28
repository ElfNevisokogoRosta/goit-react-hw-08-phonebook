import React, { useState } from "react";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";
import { ToastContainer } from "react-toastify";
import {
  Container,
  Navigation,
  NavigationContainer,
  NavigationElement,
} from "./Auth.styled";
import { useSelector } from "react-redux";
import { selectTheme } from "../utils/themeSelectors";

export const Auth: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("login");
  const theme = useSelector(selectTheme);
  const tabHandler = () => {
    if (activeTab === "login") {
      setActiveTab("register");
    } else {
      setActiveTab("login");
    }
  };
  return (
    <Container theme={theme}>
      <NavigationContainer theme={theme}>
        <Navigation theme={theme}>
          <NavigationElement
            onClick={tabHandler}
            theme={theme}
            className={activeTab === "login" ? "active" : ""}
          >
            Login
          </NavigationElement>
          <NavigationElement
            onClick={tabHandler}
            theme={theme}
            className={activeTab !== "login" ? "active" : ""}
          >
            Register
          </NavigationElement>
        </Navigation>
      </NavigationContainer>
      {activeTab === "login" ? <Login /> : <Register />}
      <ToastContainer />
    </Container>
  );
};
