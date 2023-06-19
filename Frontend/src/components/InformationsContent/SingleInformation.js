import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import classes from "./SingleInformation.module.css";
import InfoContext from "../../store/info-context";
import LoadingSpinner from "../UI/LoadingSpinner";

const SingleInformation = () => {
  const { informations, infoAreLoading, loadingError } =
    useContext(InfoContext);
  const params = useParams();
  const [singleInfoTitleContent, setSingleInfoTitleContent] = useState(null);
  const [singleInfoTextContent, setSingleInfoTextContent] = useState(null);

  useEffect(() => {
    const singleInfo = informations?.find((info) => info.id === params.infoId);
    setSingleInfoTitleContent(singleInfo?.title);

    if (singleInfo) {
      const singleInfoText = singleInfo.text;
      const formattedInfoText = singleInfoText
        .split("<br>")
        .map((str) => <p key={str}>{str}</p>);
      setSingleInfoTextContent(formattedInfoText);
    }
  }, [informations, params.infoId]);

  return (
    <Fragment>
      {informations && !loadingError && (
        <article className={classes.article}>
          <h1>{singleInfoTitleContent}</h1>
          <div>{singleInfoTextContent}</div>
        </article>
      )}
      {infoAreLoading && <LoadingSpinner />}
    </Fragment>
  );
};

export default SingleInformation;
