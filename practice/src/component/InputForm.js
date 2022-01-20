import React, { useState } from "react";

import ErrorModal from "./ErrorModal";

const InputForm = (props) => {
  const [username, setUsername] = useState();
  const [age, setAge] = useState();
  const [id, setId] = useState(0);
  const [error, seterror] = useState();

  const UserHandler = (e) => {
    setUsername(e.target.value);
  };
  const AgeHandler = (e) => {
    setAge(e.target.value);
  };
  const ChangeHandler = (e) => {
    e.preventDefault();
    setId(Math.random().toString());
    const UserData = {
      Username: username,
      UserAge: age,
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
    setUsername("");
    setAge("");
    props.onSaveData(UserData);
  };
  const errorHandler = () => {
    seterror(null);
  };

  return (
    <div>
      <form onSubmit={ChangeHandler}>
        <input onChange={UserHandler}></input>
        <input onChange={AgeHandler}></input>
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
