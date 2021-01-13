import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Topbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
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
          <Route path="/login" component={Login} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
