import {
  TextField,
  Button,
  Grid,
  createTheme,
  Paper,
  Box,
  Container,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const textStyle = {
    padding: 10,
  };

  const Submit = (e) => {
    if (password === "123") {
      navigate("/portal");
    }
  };

  const theme = createTheme();

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
    // <div
    // style={{
    //   height: "100vh",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   display: "flex",
    // }}
    // >
    //   {/* <Grid
    //     item
    //     xs={6}
    //     component={Paper}
    //     elevation={6}
    //     square
    //     style={{ paddingLeft: 25 }}
    //   >
    //     <h1>Login Page</h1>
    //     <Box component="form" noValidate onSubmit={Submit} sx={{ mt: 1 }}>
    //       <Grid>
    //         <div>
    //           <TextField
    //             variant="outlined"
    //             id="LoginID"
    //             label="Enter ID"
    //             value={loginId}
    //             onChange={(e) => {
    //               setLoginId(e.target.value);
    //             }}
    //           />
    //         </div>
    //       </Grid>
    //       <TextField
    //         variant="outlined"
    //         id="Password"
    //         label="Enter Password"
    //         value={password}
    //         onChange={(e) => {
    //           setPassword(e.target.value);
    //         }}
    //       />
    //       <br />
    //       <br />
    //       <Button variant="contained" type="submit">
    //         Login
    //       </Button>
    //     </Box>
    //     <br />
    //   </Grid>
    // </div> */}
  );
}

export default LoginPage;
