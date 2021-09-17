import { useEffect, useState } from "react";
import "./Basket.css";

function Basket() {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const getBasket = JSON.parse(window.localStorage.getItem("basket"));
    setBasket(getBasket);
  }, []);

  return !basket.length ? (
    <div className="containerBasket">
      <h1>Ваша корзина пуста</h1>
      <p>Перейдите в каталог и добавьте интересующие вас товары в корзину</p>
      <button>Перейти на главную</button>
    </div>
  ) : (
    <div>
      {basket.map((el) => (
        <div key={el.id}>
          <p>{el.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Basket;
