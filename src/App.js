import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Registration from "./containers/Registration";
import Login from "./containers/Login";
import Headerbar from "./components/Headerbar";
import SideNav from "./components/SideNav";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

function App() {
  const isloggedIn = useSelector((state) => state.isUserLoggedIn.isUserLoggedIn);

  return (
    <div>
      <BrowserRouter>
        {isloggedIn ? <Headerbar /> : <></>}
        <Box sx={{ display: "flex" }}>
          {isloggedIn ? <SideNav /> : <></>}
          <Routes>
            <Route
              path="/register"
              element={
                isloggedIn ? (
                  <Navigate replace to="/dashboard" />
                ) : (
                  <Registration />
                )
              }
            />
            <Route
              path="/login"
              element={
                isloggedIn ? <Navigate replace to="/dashboard" /> : <Login />
              }
            />

            <Route path="/" element={<Navigate replace to="/login" />} />

            <Route
              path="/dashboard"
              element={
                isloggedIn ? <PageOne /> : <Navigate replace to="/login" />
              }
            />
            <Route
              path="/order-history"
              element={
                isloggedIn ? <PageTwo /> : <Navigate replace to="/login" />
              }
            />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
