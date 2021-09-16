import {
  ADD_NEW_CATEGORY_DB,
  GET_ALL_CATEGORY_DB,
} from "../../urls/CategoryUrls";
import { useEffect, useState } from "react";
import "./AdminOffice.css";
import axios from "axios";

function AdminOffice() {
  const [category, setCategory] = useState([]);
  const [addCategoryForm, setAddCategoryForm] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(GET_ALL_CATEGORY_DB).then((res) => setCategory(res.data));
  }, []);

  const changeState = () => {
    setAddCategoryForm((prev) => !prev);
    setMessage("");
  };

  const addCategory = (e) => {
    e.preventDefault();
    if (e.target.name.value.trim()) {
      axios
        .post(ADD_NEW_CATEGORY_DB, { name: e.target.name.value })
        .then((res) => {
          if (res.data.statusCode === 200) {
            setMessage(res.data.data);
            setAddCategoryForm((prev) => !prev);
          } else {
            setMessage(res.data.data);
          }
        });
    }
  };

  return (
    <div className="containerMain">
      <h1>Категории</h1>
      {message ? <p>{message}</p> : null}
      {addCategoryForm ? (
        <form onSubmit={addCategory}>
          <input name="name" placeholder="Название категории" />
          <div>
            <button>Добавить</button>
            <button onClick={changeState}>Отменить</button>
          </div>
        </form>
      ) : (
        <>
          <button onClick={changeState}>Добавить категорию</button>
          <ul>
            {category.map((el) => (
              <li className="listCategory" key={el.id}>{el.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default AdminOffice;
