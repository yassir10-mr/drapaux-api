import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all/`)
      .then((response) => setTodos(response.data))
      .catch((error) => console.error(error));
  }, [pages]);

  return (
    <div>
      <h1>Flags</h1>
      <ul>
        {todos.map((todo, i) => (
          <ListFlag todo={todo} key={i} />
        ))}
      </ul>
    </div>
  );
}

function ListFlag({ todo }) {
  return (
    <li>
      <div className="flag-info">
        <img src={todo.flags.svg} alt={todo.name.common} />
        <h3>{todo.name.common}</h3>
        <span>Region: {todo.region}</span>
        <span>Capital: {todo.capital}</span>
      </div>
    </li>
  );
}
