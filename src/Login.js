import React from "react";

// Material UI components
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles/";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

// Styles
const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10,
  },
  progess: {
    position: "absolute",
  },
});

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    classes,
  } = props;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      {/* <section className="login"> */}
      <div className="loginContainer">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="User Name"
          onChange={(e) => setEmail(e.target.value)}
          error={emailError? true: false}
          helperText ={emailError}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError? true: false}
          helperText={passwordError}
        />

        <div >
          {hasAccount ? (
            <>
              <Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={handleLogin}
							disabled={ !email || !password}
						>
							Sign In		
						</Button>
              <Grid container>
							<Grid item>
                <p>
                Don't have an account?{" "}
                <span className="loginSwitch" onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p> 
							</Grid>
						</Grid>
            </>
          ) : (
            <div>
              <Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={handleSignup}
							disabled={ !email || !password}
						>
							Sign Up		
						</Button>
              <Grid container>
							<Grid item>
              <p>
                Have an account?{" "}
                <span className="loginSwitch" onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p> 
							</Grid>
						</Grid>
            </div>
          )}
        </div>
      </div>
      </div>
      {/* </section> */}
    </Container>
  );
};
export default withStyles(styles)(Login);
