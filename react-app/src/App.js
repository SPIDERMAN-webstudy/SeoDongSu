import Button from "./button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setkeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setkeyword(event.target.value);
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  };
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    if (keyword !== "") {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <h1>{keyword}</h1>
      <input
        type="text"
        value={keyword}
        onChange={onChange}
        placeholder="Search here...."
      ></input>
      <h2>{counter}</h2>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
