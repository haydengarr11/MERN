import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import {createPost} from '../../actions/posts'

const Form = () => {
  const [postData, setPostData] = useState({ creator: "", title: "", message: "", tags: "", selectedFile: "", });
  const { classes } = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(createPost(postData));
  };

  const clear = () => {

  }
  //where we are storing the data. Whole data in post is going to be put in state

  return (
    <Paper className={classes.Paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullwidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value }) } />
        <TextField name="title" variant="outlined" label="Title" fullwidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullwidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value }) } />
        <TextField name="tages" variant="outlined" label="Tags" fullwidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
        <div className={classes.fileinput}> 
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 }) } />
            <Button className={classes.buttonSubmit} cariant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button  cariant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
