import { getProductByArticleStart } from "../../../redux/actions/product.ac";
import { useHistory, useLocation, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../AllCategory.css";

function FullProduct() {
  const { pathname } = useLocation();
  const { article } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [characteristic, setCharacteristic] = useState(true);
  const [addInBasket, setAddInBasket] = useState(true);
  const [valueProduct, setValueProduct] = useState(1);
  const [copyLink, setCopyLink] = useState(true);
  const [product, setProduct] = useState([]);

  const {
    name,
    imagePath,
    vendorCode,
    price,
    color,
    weight,
    dimensions,
    equipment,
    material,
    compositionProduct,
    care,
  } = product;

  useEffect(() => {
    dispatch(getProductByArticleStart({ article, setProduct }));
  }, [article, dispatch]);

  return (
    <div className="fullProduct">
      {imagePath ? (
        <img src={`http://localhost:3005/uploads/${imagePath}`} alt="#" />
      ) : null}
      <div className="productCharacteristic">
        <h5 onClick={() => history.goBack()}>Вернуться</h5>
        <p>Арт. {vendorCode} </p>
        <h3>{name}</h3>
        <h2>{price}₽</h2>
        <div className="productInfo">
          <span>Размер</span>
          <select className="sizeProduct">
            <option>Выбрать размер</option>
            <option value="91936">Полутораспальное </option>
            <option value="91937">Евро </option>
          </select>
        </div>
        <div className="productInfo">
          <span>Количество</span>
          <div className="valueProduct">
            <div
              onClick={() =>
                valueProduct > 1 ? setValueProduct((prev) => prev - 1) : null
              }
            >
              <svg
                width="10"
                height="2"
                viewBox="0 0 10 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.57573 1.014L9.52173 1.896H0.539727L0.431727 1.788L0.521727 0.888H9.48573L9.57573 1.014Z"
                  fill="#A0A0A0"
                ></path>
              </svg>
            </div>
            <div>{valueProduct}</div>
            <div onClick={() => setValueProduct((prev) => prev + 1)}>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.49978 0.576V3.726H7.64978L7.75778 3.834L7.66778 4.734H4.49978V7.92L3.59978 7.992L3.49178 7.884V4.734H0.341781L0.233781 4.626L0.323781 3.726H3.49178V0.539999L4.39178 0.45L4.49978 0.576Z"
                  fill="#A0A0A0"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            let basket = JSON.parse(window.localStorage.getItem("basket"));
            basket.push(product);
            localStorage.setItem("basket", JSON.stringify(basket));
            setAddInBasket(false);
          }}
          className="addInBasket"
        >
          {addInBasket ? "Добавить в корзину" : "Товар в корзине"}
        </button>
        <br />
        <div className="copyLink">
          <p>Ссылка на товар</p>
          <button
            onClick={() => {
              setCopyLink(false);
              navigator.clipboard.writeText(`http://localhost:3000${pathname}`);
            }}
          >
            {copyLink ? "Скопировать" : "Ссылка скопирована"}
          </button>
        </div>
        <div>
          <ul className="ulProduct">
            <p onClick={() => setCharacteristic(true)}>Характеристики</p>
            <p onClick={() => setCharacteristic(false)}>Уход</p>
          </ul>
          {characteristic ? (
            <>
              <div className="productInfo">
                <span>Материал:</span>
                <span>{material}</span>
              </div>
              <div className="productInfo">
                <span>Состав:</span>
                <span>{compositionProduct}</span>
              </div>
              <div className="productInfo">
                <span>Цвет:</span>
                <span>{color}</span>
              </div>
              <div className="productInfo">
                <span>Размер, см:</span>
                <span>{dimensions}</span>
              </div>
              <div className="productInfo">
                <span>Комплектация:</span>
                <span>{equipment}</span>
              </div>
              <div className="productInfo">
                <span>Вес, кг:</span>
                <span>{weight}</span>
              </div>
            </>
          ) : (
            <p>{care}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(FullProduct);
