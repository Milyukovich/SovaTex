import { getAllBedSheetsStart } from "../../../redux/actions/product.ac";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Product from "../Product/Product";
import "../AllCategory.css";

function BedSheets() {
  const products = useSelector((state) => state.product.bedSheets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) dispatch(getAllBedSheetsStart());
  }, [products, dispatch]);

  return (
    <div>
      <h1>Простыни</h1>
      <Product products={products} />
    </div>
  );
}

export default React.memo(BedSheets);
