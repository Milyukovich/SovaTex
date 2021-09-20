import ProductCategory from "../AllCategory/ProductCategory/ProductCategory";
import FullProduct from "../AllCategory/FullProduct/FullProduct";
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
        <ProductCategory nameRu={"Пододеяльники"} name={"duvetcovers"} />
      </Route>
      <Route exact path="/pillowcases">
        <ProductCategory nameRu={"Наволочки"} name={"pillowcases"} />
      </Route>
      <Route exact path="/bedsheets">
        <ProductCategory nameRu={"Простыни"} name={"bedsheets"} />
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
