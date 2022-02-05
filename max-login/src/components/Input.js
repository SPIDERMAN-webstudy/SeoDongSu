const Input = (props)=>{

    return (
      <div className={props.InputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={props.InputChangeHandler}
          onBlur={props.InputBlurHandler}
          value={props.enteredName}
        />
        {props.nameInputIsInvalid && (
          <p className="error-text">Name must be empty.</p>
        )}
      </div>
    );
}



export default Input;