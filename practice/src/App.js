import React, { useState } from "react";
import InputList from "./component/InputList";
import InputForm from "./component/InputForm";

const App = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [SData, setData] = useState([]);
  const ChangeEdit = () => {
    setIsEditing(true);
  };
  const SaveDataHandler = (enteredSaveData) => {
    setData((userData) => [...userData, enteredSaveData]);
    ChangeEdit();
  };

  return (
    <>
      <InputForm onSaveData={SaveDataHandler} />
      {isEditing ? <InputList User={SData} /> : null}
    </>
  );
};

export default App;
