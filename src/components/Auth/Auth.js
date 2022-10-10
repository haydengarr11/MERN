import React , {useEffect, useState} from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
  FormControl,
  outlinedInputClasses,
} from "@mui/material";
// import { GoogleLogin } from '@react-oauth/google';
import useStyles from "./styles";
import LockOutlined from "@mui/icons-material/LockOutlined";
import Input from "./input";
import Icon from './icon';
import {useHistory} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useDispatch } from "react-redux";
import {signin, signup} from '../../actions/auth'

const initializeState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Auth = () => {
  const { classes } = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState(initializeState);



  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
        client_id: "220127504556-i0hsarqea6n8jppavtk1no3mlm8o1b1p.apps.googleusercontent.com",
        callback: googleSuccess
    })
    google.accounts.id.renderButton(
        document.getElementById("GoogleLogin"),
        {theme: "outline", size: "large"}
    )

  }, []);
  

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSignup){
        dispatch(signup(formData, history));
    }else {
        dispatch(signin(formData, history));
    }
  };

  const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false); 
  };

  const googleSuccess = async (res) => {
    const result = jwt_decode(res?.credential);
    
    try {
        dispatch({type: 'AUTH', data: result});
        history.push('/');
    } catch (error) {
        console.log(error); 
    }    
  }

  const googleError = (error) => {
      console.log("Google Sign In Unsuccessful. Try Again");
      console.log(error);
}

  return (
    <Container component="main" maxwidth="xs" className={classes.main}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign in"}</Typography>
        <FormControl className={classes.form} onSubmit={handleSubmit}>
          <Grid container scpacing={2}>
            {isSignup && ( <> <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half /> <Input name="lastName" label="Last Name" handleChange={handleChange} half/> </> )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" />}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <div id="GoogleLogin" />
          <Grid container justify="flex-end">
              <Grid item>
                  <Button onClick={switchMode}>
                      { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
                  </Button>
              </Grid>
          </Grid>
        </FormControl>
      </Paper>
    </Container>
  );
};

export default Auth;
