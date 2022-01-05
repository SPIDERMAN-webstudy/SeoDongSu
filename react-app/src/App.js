import { useEffect, useState } from "react";

function App() {
  const [toDo, settoDo] = useState("");
  const [toDos, settoDos] = useState([]);
  const onChange = (event) => settoDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    settoDo("");
    settoDos((CurrentArray) => [toDo, ...toDos]);
  };
  return (
    <div>
      <h1>{toDos}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          text=""
          type="text"
          placeholder="Write here"
        ></input>
        <button>Submit</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
