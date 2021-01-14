import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Topbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";

import Home from "./pages/home/Home";
import Enterprise from "./pages/enterprise/Enterprise";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <Router>
      <Topbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/enterprise" component={Enterprise} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/login" component={Login} /> */}
        </Switch>
      <Footer />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
