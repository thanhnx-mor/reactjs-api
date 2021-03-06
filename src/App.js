import React, { Component } from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import routes from "./routes";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
            <div className="row">
              {this.showContentMenu(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }
  showContentMenu = (routes) => {
    let result = null
    if ( routes.length > 0 )
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.main}
          >
          </Route>
        )
      })
    return <Switch>{result}</Switch>
  }
}

export default App;
