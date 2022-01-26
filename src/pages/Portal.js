import React from "react";
import { Button, Grid, Box, Container, Typography } from "@material-ui/core";
import CreateSubmission from "../image/submit.png";
import ViewSubmission from "../image/viewSubmission.png";
import { useNavigate } from "react-router-dom";

function Portal() {
  const navigate = useNavigate();

  const navSubmissionCreate = (e) => {
    navigate("/create_submission");
  };

  const navSubmissionStatus = (e) => {
    navigate("/submission_status");
  };
  return (
    <div>
      <Container
        maxWidth="xs"
        style={{
          height: "90vh",
          alignItems: "center",
          display: "grid",
          maxWidth: "1000px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Button
                style={{
                  minWidth: "200px",
                  minHeight: "196px",
                  background: `url(${CreateSubmission})`,
                }}
                onClick={navSubmissionCreate}
              />
              <Typography variant="h5">Create Submission</Typography>
            </Grid>
            <Grid item xs={3}>
              <Button
                style={{
                  minWidth: "200px",
                  minHeight: "196px",
                  background: `url(${ViewSubmission})`,
                }}
                onClick={navSubmissionStatus}
              />
              <Typography variant="h5">Submission Status</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* <Container
        maxWidth="xs"
        style={{
          height: "90vh",
          alignItems: "center",
          display: "grid",
          maxWidth: "1000px",
        }}
      >
        <Box m={1} pt={0}>
          <Grid xs={6} item>
            <Button
              text="Click"
              style={{
                minWidth: "200px",
                minHeight: "196px",
                background: `url(${CreateSubmission})`,
              }}
            />
          </Grid>
          <Grid xs={6} item>
            <Button
              text="Click"
              style={{
                minWidth: "200px",
                minHeight: "196px",
                background: `url(${CreateSubmission})`,
              }}
            />
          </Grid>
        </Box>
      </Container> */}
    </div>
  );
}
export default Portal;
