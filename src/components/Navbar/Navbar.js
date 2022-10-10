import React, {useEffect, useState} from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import useStyles  from "./styles";
import memories from '../../images/memories.png';
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useLocation } from "react-router";



const Navbar = () => {
    const { classes } = useStyles();
    const dispatch = useDispatch()
    const history = useHistory();
    const location = useLocation();
    // const user = null;

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    console.log(user);
    const logout = () => {
      dispatch({ type: 'LOGOUT' });

      history.push('/');

      setUser(null);
    }

    useEffect(() => {
      const result = user?.result;


      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
  return (
  <AppBar className={classes.appBar} position="static" color="inherit">
    <div>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.img} src={memories} alt="memories" height="100" />
    </div>
    <Toolbar className={classes.toolbar}>
        {user ? (
            <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user.name} src={user.imageUrl}>{user.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user.name}</Typography> 
                <Button variant="contained" className={classes.logut} color="secondary" onClick={logout}>Logout</Button>
            </div>
        ): (
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign-In</Button>
        )}
    </Toolbar>
  </AppBar>
)};

export default Navbar;