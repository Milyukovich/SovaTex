import { getAllPillowcasesStart } from "../../../redux/actions/product.ac";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Product from "../Product/Product";
import "../AllCategory.css";

function Pillowcases() {
  const products = useSelector((state) => state.product.pillowcases);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) dispatch(getAllPillowcasesStart());
  }, []);

  return (
    <div>
      <h1>Наволочки</h1>
      <Product products={products} />
    </div>
  );
}

export default React.memo(Pillowcases);
