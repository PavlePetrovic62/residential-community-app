import { useContext } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import classes from "./InformationsContent.module.css";

import InfoContext from "../../store/info-context";
import MotionCard from "../UI/Card";
import InformationList from "./InformationList";
import SingleInformation from "./SingleInformation";

const InformationsContent = () => {
  const { path, url } = useRouteMatch();
  const { loadingError } = useContext(InfoContext);

  return (
    <div className={classes.wrapper} key="/obavestenja">
      <MotionCard className={classes.infoListCard}>
        <InformationList />
      </MotionCard>
      <Route path={`${path}/:infoId`}>
        <AnimatePresence>
          {!loadingError && (
            <MotionCard
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              key={url}
              className={classes.singleInfoCard}
            >
              <SingleInformation />
            </MotionCard>
          )}
        </AnimatePresence>
      </Route>
    </div>
  );
};

export default InformationsContent;
