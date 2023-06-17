import {
  Route,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";

import classes from "./InformationsContent.module.css";

import MotionCard from "../UI/Card";
import InformationList from "./InformationList";
import SingleInformation from "./SingleInformation";
import { AnimatePresence } from "framer-motion";

const InformationsContent = () => {
  const { path, url } = useRouteMatch();

  return (
    <div className={classes.wrapper} key="/obavestenja">
      <MotionCard className={classes.infoListCard}>
        <InformationList />
      </MotionCard>
      <Route path={`${path}/:infoId`}>
        <AnimatePresence>
          <MotionCard
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            key={url}
            className={classes.singleInfoCard}
          >
            <SingleInformation />
          </MotionCard>
        </AnimatePresence>
      </Route>
    </div>
  );
};

export default InformationsContent;
