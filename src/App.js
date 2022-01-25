import { ComponentRoutes, LoginRoutes } from "./utils/Routes";
import AppBar from "./components/AppBar";
import Drawer from "./components/Drawer";
import React, { Fragment, useEffect, useState } from "react";
import { AppContext } from "./lib/ContextLib";
import { useNavigate } from "react-router-dom";

function App() {
  const [isClick, setIsClick] = useState(false);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onLoad();
  }, []);

  function onLoad() {
    if (window.sessionStorage.getItem("auth") === "true") {
      userHasAuthenticated(true);
    } else {
      userHasAuthenticated(false);
    }
  }

  const setClick = () => {
    setIsClick(!isClick);
  };

  const setAuth = () => {
    userHasAuthenticated(false);
  };

  return (
    <div>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        {!isAuthenticated && <LoginRoutes />}
      </AppContext.Provider>
      {isAuthenticated && (
        <Fragment>
          <AppBar clickValue={setClick} authValue={setAuth} />
          <Drawer
            valueSend={isClick}
            key={Math.random().toString()}
            clickValue={setClick}
          />
          <ComponentRoutes />
        </Fragment>
      )}
    </div>
  );
}

export default App;
