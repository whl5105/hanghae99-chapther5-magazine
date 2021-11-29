import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

// pages
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Header from "../components/Header";
import Sigup from "../pages/Signup";
import { Grid } from "../elements";
function App() {
  return (
    <React.Fragment>
      <Grid>
        <Header />
        <BrowserRouter>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Sigup} />
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
