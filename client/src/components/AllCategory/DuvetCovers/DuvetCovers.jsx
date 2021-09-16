import { getAllDuvetCoversStart } from "../../../redux/actions/product.ac";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Product from "../Product/Product";
import "../AllCategory.css";

function DuvetCovers() {
  const products = useSelector((state) => state.product.duvetCovers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) dispatch(getAllDuvetCoversStart());
  }, []);

  return (
    <div>
      <h1>Пододеяльники</h1>
      <Product products={products} />
    </div>
  );
}

export default React.memo(DuvetCovers);
