import { useContext, useState } from "react";
import useInput from "../../hooks/use-input";
import Modal from "../UI/Modal";
import classes from "./AuthForm.module.css";
import AuthContext from "../../store/auth-context";

const isUserNameValid = (value) => value.trim() !== "";
const isPasswordValid = (value) => value.trim() !== "";

const AuthForm = (props) => {
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const loginHandler = () => {
    authCtx.login();
  };

  const {
    value: usernameValue,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
  } = useInput(isUserNameValid);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(isPasswordValid);

  let formIsValid = false;

  if (usernameIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCRWp04JEoB8618qLJw1DWst5lKhnYxAvM",
      {
        method: "POST",
        body: JSON.stringify({
          email: usernameValue,
          password: passwordValue,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error("Autentikacija nije uspela!");
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
      })
      .catch((err) => {
        alert(err.message);
      });

    props.onHideLogin();
  };

  const usernameClasses = usernameHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : classes["form-control"];
  const passwordClasses = passwordHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : classes["form-control"];

  return (
    <Modal onClose={props.onHideLogin}>
      <form onSubmit={formSubmissionHandler}>
        <div className={usernameClasses}>
          <label htmlFor="username">Корисничко име</label>
          <input
            type="text"
            id="username"
            autoComplete="username"
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
            value={usernameValue}
          />
          {usernameHasError && (
            <p className={classes["error-text"]}>
              Корисничко име не сме бити празно.
            </p>
          )}
        </div>
        <div className={passwordClasses}>
          <label htmlFor="password">Лозинка</label>
          <input
            type="password"
            id="password"
            autoComplete="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={passwordValue}
          />
          {passwordHasError && (
            <p className={classes["error-text"]}>Лозинка не сме бити празна.</p>
          )}
        </div>
        {isLoading && <p>Молимо сачекајте...</p>}
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            type="button"
            onClick={props.onHideLogin}
          >
            Назад
          </button>
          <button
            className={classes.button}
            type="submit"
            disabled={!formIsValid}
            onClick={loginHandler}
          >
            Пријави се
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AuthForm;
