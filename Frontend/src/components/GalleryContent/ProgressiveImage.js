import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProgressiveImage = React.forwardRef(
  ({ placeholderSrc, src, ...props }, ref) => {
    const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

    useEffect(() => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImgSrc(src);
      };
    }, [src]);

    const customClass =
      placeholderSrc && imgSrc === placeholderSrc
        ? "img-loading"
        : "img-loaded";

    return (
      <img
        {...{ src: imgSrc, ...props }}
        ref={ref}
        alt={props.alt || ""}
        className={customClass}
      />
    );
  }
);

const MotionProgressiveImage = motion(ProgressiveImage);

export default MotionProgressiveImage;
