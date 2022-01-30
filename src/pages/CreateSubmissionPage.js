import React, { useState } from "react";
import {
  Button,
  Grid,
  Box,
  Container,
  Typography,
  TextField,
} from "@material-ui/core";

function CreateSubmission() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agency, setAgency] = useState("");
  const [feedback, setFeedback] = useState("");

  const ClearForm = (e) => {
    setName("");
    setEmail("");
    setPhone("");
    setAgency("");
    setFeedback("");
  };

  const SubmitForm = (e) => {
    //value pass to backend
  };

  return (
    <div>
      <Container
        style={{
          height: "50vh",
          alignItems: "center",
          display: "grid",
          maxWidth: "1700px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item>
              <Typography variant="h5">Name:</Typography>
            </Grid>
            <Grid item xs={5}>
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
            <Grid item>
              <Typography variant="h5">Email:</Typography>
            </Grid>
            <Grid item xs={5}>
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
              <Typography variant="h5">Phone:</Typography>
            </Grid>
            <Grid item xs={5}>
              <TextField
                style={{ width: 395 }}
                size="small"
                variant="outlined"
                value={phone}
                id="Phone"
                label="Enter Phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h5">Agency:</Typography>
            </Grid>
            <Grid item xs={5}>
              <TextField
                style={{ width: 375 }}
                size="small"
                variant="outlined"
                value={agency}
                id="Agency"
                label="Enter Agency"
                onChange={(e) => {
                  setAgency(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Feedback:</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{ width: 1350 }}
                multiline={true}
                rows={6}
                variant="outlined"
                value={feedback}
                id="Feedback"
                label="Enter Feedback"
                onChange={(e) => {
                  setFeedback(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={9}>
              <Button
                variant="contained"
                style={{ float: "right" }}
                onClick={ClearForm}
              >
                Clear
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" style={{ float: "right" }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default CreateSubmission;
