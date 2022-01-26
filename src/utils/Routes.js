import React from "react";
import { Route, Routes as Routess } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import CreateSubmissionPage from "../pages/CreateSubmissionPage";
import Portal from "../pages/Portal";

const componentRoutes = [
  { path: "/create_submission", element: <CreateSubmissionPage /> },
  { path: "/portal", element: <Portal /> },
  { path: "/", element: <Portal /> },
];

const loginRoutes = [{ path: "/", element: <LoginPage /> }];

export function ComponentRoutes() {
  return (
    <Routess>
      {componentRoutes.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}
    </Routess>
  );
}

export function LoginRoutes() {
  return (
    <Routess>
      {loginRoutes.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}
    </Routess>
  );
}
