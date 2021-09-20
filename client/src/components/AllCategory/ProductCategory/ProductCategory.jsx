import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Product from "../Product/Product";
import "../AllCategory.css";
import { getAllProductStart } from "../../../redux/actions/product.ac";

function ProductCategory({ nameRu, name }) {
  const dispatch = useDispatch();
  let products = useSelector((state) => {
    if (name === "duvetcovers") return state.product.duvetCovers;
    if (name === "pillowcases") return state.product.pillowcases;
    if (name === "bedsheets") return state.product.bedSheets;
  });

  useEffect(() => {
    console.log(name);
    dispatch(getAllProductStart(name));
  }, [name, dispatch]);

  return (
    <div>
      <h1>{nameRu}</h1>
      <Product products={products} />
    </div>
  );
}

export default React.memo(ProductCategory);
