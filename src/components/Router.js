import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth";
import Home from "../pages/Home";

const AppRouter = ({isLoggedIn}) => {
  return (
    <Routes>
      {isLoggedIn ? (
        <Route path="/" element={<Home />} />
      ) : (
        <Route path="/" element={<Auth />} />
      )}
    </Routes>
  );
};

export default AppRouter;
