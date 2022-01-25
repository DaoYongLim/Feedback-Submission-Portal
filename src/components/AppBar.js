import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { useAppContext } from "../lib/ContextLib";
import { useNavigate } from "react-router-dom";

function ButtonAppBar(props) {
  const navigate = useNavigate();

  const menuHandler = () => {
    props.clickValue();
  };

  const logOut = () => {
    window.sessionStorage.setItem("auth", false);
    props.authValue();
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={menuHandler}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Portal
          </Typography>
          <Button
            style={{
              marginLeft: "auto",
              borderRadius: 20,
              backgroundColor: "#e3f2fd",
              padding: "13px 25px",
              fontSize: "12px",
            }}
            variant="contained"
            onClick={logOut}
          >
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
