import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <Router>
      <ul className="menu">
        <ul>
          <li>
            <Link to="/sova/admin/office">Профиль админа</Link>
          </li>
          <li>
            <Link to="/search">Поиск</Link>
          </li>
        </ul>
        <li>
          <Link to="/">SOVA</Link>
        </li>
        <ul>
          <li>
            <Link to="/favorites">Избранное</Link>
          </li>
          <li>
            <Link to="/basket">Корзина</Link>
          </li>
        </ul>
      </ul>

      <Switch>
        {/* <Route exact path="/sova/admin/office">
          <AdminOffice />
        </Route> */}
        <Route exact path="/dashboard">
          {/* <Dashboard /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
