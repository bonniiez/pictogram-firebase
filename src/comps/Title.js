import React from "react";
// Material UI components
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const Title = ({ handleLogout }) => {
  return (
    <Container component="main" maxWidth="md">
      <div className="title">
        <Grid container justify="space-between" spacing={3} alignItems="center">
          <Grid item xs={6}>
            <h1>PictoGram</h1>
          </Grid>
          <Grid item>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </Grid>
        </Grid>
        <h2>Image Repository</h2>
        <p>Upload your photos to build your own photo gallery!</p>
      </div>
    </Container>
  );
};

export default Title;
