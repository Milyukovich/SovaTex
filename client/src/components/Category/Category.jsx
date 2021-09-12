import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";

function Category() {
  return (
    <div className="container">
    <Router>
      <div>
        <Link to="spalna">Спальня</Link>
      </div>
      <div>
        <Link to="odejda">Одежда</Link>
      </div>
      <div>
        <Link to="decor">Декор</Link>
      </div>

      <Switch>
        <Route exact path="/spalna">
          {/* <About /> */}
        </Route>
        <Route exact path="/odejda">
          {/* <Dashboard /> */}
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default Category;
