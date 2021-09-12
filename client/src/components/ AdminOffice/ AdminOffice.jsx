import { useEffect, useState } from "react";
import axios from "axios";
import { GET_ALL_CATEGORY_DB } from "../../urls/CategoryUrls";

function AdminOffice() {

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get(GET_ALL_CATEGORY_DB).then(res => setCategory(res.data))
  }, [])
  
  return (
    <div>
      <h1>Категории</h1>
      {category.map((el) => <p key={el.id}>{el.name}</p>)}
      <button>Добавить категорию</button>
    </div>
  );
}

export default AdminOffice;
