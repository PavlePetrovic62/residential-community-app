import { useContext } from "react";
import { useParams } from "react-router-dom";

import classes from "./SingleInformation.module.css";
import InfoContext from "../../store/info-context";

const SingleInformation = () => {
  const { informations } = useContext(InfoContext);
  const params = useParams();

  const singleInfo = informations?.find((info) => info.id === params.infoId);

  return (
    <article className={classes.article}>
      <h1>{singleInfo?.title}</h1>
      <p>{singleInfo?.text}</p>
    </article>
  );
};

export default SingleInformation;
