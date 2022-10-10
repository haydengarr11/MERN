import { Container, Grow, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';


const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const { classes } = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]); //! adding currentId to the dependency array makes it so that when the current Id changes then it refreshes the App

  return (
    <Grow in>
      <Container className={classes.app}>
        <Grid
          className={classes.mainContainer}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
          height="30"
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
