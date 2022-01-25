import {
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  Container,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../lib/ContextLib";

function LoginPage() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const { userHasAuthenticated } = useAppContext();
  const navigate = useNavigate();

  const Submit = (e) => {
    if (password === "123") {
      userHasAuthenticated(true);
      window.sessionStorage.setItem("auth", true);
      navigate("/portal");
    }
  };

  return (
    <Container
      maxWidth="xs"
      style={{
        height: "100vh",
        alignItems: "center",
        display: "grid",
      }}
      component="form"
      onSubmit={Submit}
    >
      <Paper elevation={6}>
        <Box m={2} pt={3}>
          <Typography variant="h5">Login Page</Typography>
        </Box>
        <Box m={2} pt={3}>
          <Grid xs={12} item>
            <TextField
              fullWidth
              variant="outlined"
              id="LoginID"
              label="Enter ID"
              value={loginId}
              onChange={(e) => {
                setLoginId(e.target.value);
              }}
            />
          </Grid>
        </Box>
        <Box m={2} pt={1}>
          <Grid xs={12} item>
            <TextField
              fullWidth
              variant="outlined"
              id="Password"
              label="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Grid>
        </Box>
        <Box m={2} pt={1} pb={2}>
          <Grid xs={12} item>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default LoginPage;
