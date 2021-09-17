import DuvetCovers from "../AllCategory/DuvetCovers/DuvetCovers";
import FullProduct from "../AllCategory/FullProduct/FullProduct";
import Pillowcases from "../AllCategory/Pillowcases/Pillowcases";
import BedSheets from "../AllCategory/ BedSheets/BedSheets";
import AdminOffice from "../ AdminOffice/ AdminOffice";
import { Switch, Route } from "react-router-dom";
import Basket from "../Basket/Basket";
import Admin from "../Admin/Admin";

function Main() {
  return (
    <Switch>
      <Route exact path="/basket">
        <Basket />
      </Route>
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
  );
}

export default Main;
