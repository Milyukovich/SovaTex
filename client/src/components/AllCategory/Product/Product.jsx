import { Link } from "react-router-dom";
import "../AllCategory.css";
import React from "react";

function Product({ products }) {
  return (
    <div className="containerProducts">
      {products ? (
        products.map((el) => (
          <div className="containerProduct" key={el.id}>
            <Link to={`/article/${el.vendorCode}`}>
              <img
                className="imageProduct"
                src={`http://localhost:3005/uploads/${el.imagePath}`}
                alt="#"
              />
              <p>{el.name}</p>
              <p>{el.price}</p>
            </Link>
          </div>
        ))
      ) : (
        <p>Пусто</p>
      )}
    </div>
  );
}

export default React.memo(Product);
