import React, { Fragment, useContext, useEffect, useMemo } from "react";

import classes from "./InformationList.module.css";

import LoadingSpinner from "../UI/LoadingSpinner";
import InfoContext from "../../store/info-context";
import InformationFragment from "./InformationFragment";

const InformationList = () => {
  const { informations, infoAreLoading, loadingError, fetchNotifications } =
    useContext(InfoContext);

  useEffect(() => {
    if (!informations) {
      fetchNotifications();
    }
  }, [informations, fetchNotifications]);

  const infoList = useMemo(
    () =>
      informations?.map((info) => (
        <InformationFragment
          key={info.id}
          id={info.id}
          title={info.title}
          date={info.date}
        />
      )),
    [informations]
  );

  return (
    <Fragment>
      {!infoAreLoading && !loadingError && (
        <ul className={classes.list}>{infoList}</ul>
      )}
      {infoAreLoading && <LoadingSpinner />}
      {!infoAreLoading && loadingError && (
        <p className={classes["error-text"]}>{loadingError}</p>
      )}
    </Fragment>
  );
};

export default React.memo(InformationList);
