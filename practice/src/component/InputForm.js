import React, { useState, useRef } from "react";

import ErrorModal from "../UI/ErrorModal";

const InputForm = (props) => {
  const [id, setId] = useState(0);
  const [error, seterror] = useState();
  const InputUsername = useRef();
  const inputUserage = useRef();

  const ChangeHandler = (e) => {
    e.preventDefault();
    setId(Math.random().toString());
    const UserData = {
      Username: InputUsername.current.value,
      UserAge: inputUserage.current.value,
      Id: id,
    };
    if (
      UserData.Username.trim().lenght === 0 ||
      UserData.UserAge.trim().lenght === 0
    ) {
      seterror({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
    }
    InputUsername.current.value = "";
    inputUserage.current.value = "";
    props.onSaveData(UserData);
  };
  const errorHandler = () => {
    seterror(null);
  };

  return (
    <div>
      <form onSubmit={ChangeHandler}>
        <input ref={InputUsername}></input>
        <input ref={inputUserage}></input>
        <button type="submit">Add User</button>
      </form>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfrim={errorHandler}
        />
      )}
    </div>
  );
};

export default InputForm;
