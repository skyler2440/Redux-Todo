import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tasky from "./Tasky";

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to={"/"}>
                  <p>{"Todo App"}</p>
                </Link>
              </div>
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link to={"/"}>Tasky</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Tasky} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Main;