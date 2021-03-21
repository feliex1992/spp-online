import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./layout/dashboard/Dashboard";
import HomeLayout from "./layout/home/Home";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={HomeLayout} />
    </Switch>
  </BrowserRouter>
);

export default App;