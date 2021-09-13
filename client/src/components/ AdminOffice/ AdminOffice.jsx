import { useEffect, useState } from "react";
import axios from "axios";
import { GET_ALL_CATEGORY_DB } from "../../urls/CategoryUrls";

function AdminOffice() {

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get(GET_ALL_CATEGORY_DB).then(res => setCategory(res.data))
  }, [])

  const addCategory = () => {
    
  }
  
  return (
    <div>
    <h1>Категории</h1>
      <select>
        {category.map((el) => <option key={el.id}>{el.name}</option>)}
      </select>
      
      <button onClick={addCategory}>Добавить категорию</button>
    </div>
  );
}

export default AdminOffice;
