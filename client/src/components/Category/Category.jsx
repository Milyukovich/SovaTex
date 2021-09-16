import { Link } from "react-router-dom";
import "./Category.css";

function Category() {
  return (
    <div className="containerNavCat">
      <div>
        <Link to="bedsheets">Простыни</Link>
      </div>
      <div>
        <Link to="duvetcovers">Пододеяльники</Link>
      </div>
      <div>
        <Link to="pillowcases">Наволочки</Link>
      </div>
    </div>
  );
}

export default Category;
