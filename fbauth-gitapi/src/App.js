import React, { useState } from "react";
// router
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// context
import { UserContext } from "./context/UserContext";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
// popups
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
// firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// components
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

// init firebase
import { firebaseConfig } from "./firebaseConfig";
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
