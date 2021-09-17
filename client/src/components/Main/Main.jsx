import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminOffice from "../ AdminOffice/ AdminOffice";
import Admin from "../Admin/Admin";
import BedSheets from "../AllCategory/ BedSheets/BedSheets";
import DuvetCovers from "../AllCategory/DuvetCovers/DuvetCovers";
import FullProduct from "../AllCategory/FullProduct/FullProduct";
import Pillowcases from "../AllCategory/Pillowcases/Pillowcases";

function Main() {
  return (
    // <Router>
    <Switch>
      <Route exact path="/duvetcovers">
        <DuvetCovers />
      </Route>
      <Route exact path="/pillowcases">
        <Pillowcases />
      </Route>
      <Route exact path="/bedsheets">
        <BedSheets />
      </Route>
      <Route exact path="/article/:article">
        <FullProduct />
      </Route>
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/adminOffice">
        <AdminOffice />
      </Route>
    </Switch>
    //  </Router>
  );
}

export default Main;
