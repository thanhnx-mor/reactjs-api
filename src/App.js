import React, { Component } from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import Products from "./components/Products/Products";
import routes from "./routes";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
           {/* <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-primary">Add product</button>
                <Products/>
              </div>
            </div>*/}
            {this.showContentMenu(routes)}
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
