import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@mui/material";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from './components/Auth/Auth.js';

//app is only component that is parent of the posts and the form so we need to pass the data between the two

const App = () => (
  <BrowserRouter>
    <Container maxidth="lg">
      <Navbar />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
