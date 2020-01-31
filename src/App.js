import React, { Component } from "react";
import Search from "./components/search";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import SavedBooks from "./components/savedBooks";
import { ToastContainer } from "react-toastify";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer position="top-right" />
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/saved" component={SavedBooks} exact />
            <Route path="/" component={Search} exact />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
