import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./InformationFragment.module.css";

const InformationFragment = React.memo((props) => {
  return (
    <li className={classes["list-item"]}>
      <NavLink to={`/obavestenja/${props.id}`} activeClassName={classes.active}>
        <h2>{props.date}</h2>
        <p>{props.title}</p>
      </NavLink>
    </li>
  );
});

export default InformationFragment;
