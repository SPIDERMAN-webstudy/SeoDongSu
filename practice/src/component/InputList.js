import React from "react";
import App from "../App";

const InputList = (props) => {
  console.log(props);
  return (
    <ul>
      {props.User.map((User) => (
        <h3>{`${User.Username}(${User.UserAge})`}</h3>
      ))}
    </ul>
  );
};

export default InputList;
