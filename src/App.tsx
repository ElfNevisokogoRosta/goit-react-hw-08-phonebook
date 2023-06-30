import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/Auth";
import { Home } from "./pages/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { ContactBookI, addToken, useAppDispatch } from "./redux/redux.reducers";
import { Circles } from "react-loader-spinner";
import { MainContainer } from "./App.styled";
import { selectTheme } from "./utils/themeSelectors";

export const App: React.FC = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useAppDispatch();
  const [showRoute, setShowRoute] = useState<boolean>(false);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      dispatch(addToken(token));
    }
    const delay = 500;
    const timeoutID = setTimeout(() => {
      setShowRoute(true);
    }, delay);
    return () => {
      clearTimeout(timeoutID);
      setShowRoute(false);
    };
  }, [dispatch]);
  const isLoggedIn = useSelector(
    (state: { contactBook: ContactBookI }) => state.contactBook.isLoggedIn
  );
  if (!showRoute) {
    return (
      <div>
        <Circles
          height="150"
          width="150"
          color="teal"
          wrapperStyle={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#f2f2f205",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  return (
    <MainContainer theme={theme}>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/auth" replace />}
        />
        <Route
          path="/auth"
          element={isLoggedIn ? <Navigate to="/" replace /> : <Auth />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </MainContainer>
  );
};
