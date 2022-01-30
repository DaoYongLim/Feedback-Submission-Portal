import SubmissionTable from "../components/SubmissionTable";
import React, { useState } from "react";
import {
  Button,
  Grid,
  Box,
  Container,
  Typography,
  TextField,
} from "@material-ui/core";

function SubmissionStatusPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const ClearForm = (e) => {
    setName("");
    setEmail("");
  };

  const SubmitForm = (e) => {
    //value pass to backend
  };
  return (
    <div>
      <Container
        style={{
          height: "40vh",
          alignItems: "center",
          display: "grid",
          maxWidth: "480px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item>
              <Typography variant="h5">Name:</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{ width: 400 }}
                size="small"
                variant="outlined"
                value={name}
                id="name"
                label="Enter Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Email:</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{ width: 400 }}
                size="small"
                variant="outlined"
                value={email}
                id="Email"
                label="Enter Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={ClearForm}>
                Clear
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container
        style={{
          height: "40vh",
          alignItems: "flex-end",
          display: "grid",
          maxWidth: "1700px",
        }}
      >
        <SubmissionTable />
      </Container>
    </div>
  );
}

export default SubmissionStatusPage;
