import React from "react";
import { BrowserRouter, Route, Routes as Routess } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SubmissionPage from "../pages/SubmissionPage";
import Portal from "../pages/Portal";

const routes = [
  { path: "/", element: <LoginPage /> },
  { path: "/submissionPage", element: <SubmissionPage /> },
  { path: "/portal", element: <Portal /> },
];

function Routes() {
  return (
    <Routess>
      {routes.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}
    </Routess>
  );
}

export default Routes;
