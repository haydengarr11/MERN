import React, { useState, useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles';
import memories from './images/memories.png';

//app is only component that is parent of the posts and the form so we need to pass the data between the two


const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const { classes } = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]); //! adding currentId to the dependency array makes it so that when the current Id changes then it refreshes the App

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img src={memories} alt="memories" height="90"/>
            </AppBar>
            <Grow in>
                <Container className={classes.app} >
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3} height="30">
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App; 