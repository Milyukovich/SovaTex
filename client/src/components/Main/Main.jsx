import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminOffice from "../ AdminOffice/ AdminOffice";
import Admin from "../Admin/Admin";

function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/sova/admin">
          <Admin />
        </Route>
        <Route exact path="/sova/admin/office">
          <AdminOffice />
        </Route>
      </Switch>
    </Router>
  );
}

export default Main;
