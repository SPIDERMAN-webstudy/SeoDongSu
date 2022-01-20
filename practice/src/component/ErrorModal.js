import React from "react";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div />
      <div className={styles.modal}>
        <header className={styles.modal}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <button {props.onConfrim}>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
