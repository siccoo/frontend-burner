import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Login from "./components/login/Login";

import Home from "./pages/home/Home";
import Enterprise from "./pages/enterprise/Enterprise";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/enterprise" component={Enterprise} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
        </Switch>
    </Router>
  );
}

export default App;
