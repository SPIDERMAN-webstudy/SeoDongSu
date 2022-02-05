import useInput2 from "../hooks/use-input2";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput2((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: LastNameHasError,
    valueChangeHandler: LastNameChangeHandler,
    inputBlurHandler: LastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput2((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEamilInput,
  } = useInput2((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredEmail && !enteredLastName && !enteredName) {
      return;
    }

    resetEamilInput();
    resetLastNameInput();
    resetNameInput();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  const LastNameInputclasses = LastNameHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <p className="error-text">Please write your FirstName</p>
        )}
      </div>
      <div className={LastNameInputclasses}>
        <label htmlFor="Last name">Last Name</label>
        <input
        value={enteredLastName}
          type="text"
          id="Last name"
          onChange={LastNameChangeHandler}
          onBlur={LastNameBlurHandler}
        />
        {LastNameHasError && (
          <p className="error-text">Please write your LastName</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="Email">E-Mail Address</label>
        <input
          type="email"
          id="Email"
          value={enteredEmail}
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Please write your Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
