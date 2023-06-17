import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes.container}>
      <div className={classes["lds-dual-ring"]}></div>
    </div>
  );
};

export default LoadingSpinner;
