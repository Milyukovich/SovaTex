import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import React, { useEffect } from "react";
import "../AllCategory.css";
import { getProductByArticleStart } from "../../../redux/actions/product.ac";

function FullProduct() {
  let { article } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductByArticleStart(article));
  }, []);

  return (
    <div>
      <h1>Product</h1>
      <p>{article}</p>
    </div>
  );
}

export default React.memo(FullProduct);
