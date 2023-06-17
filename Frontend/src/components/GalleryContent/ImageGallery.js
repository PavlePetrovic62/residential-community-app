import * as React from "react";
import { Fragment, useState } from "react";
import { AnimatePresence, wrap } from "framer-motion";
import { images } from "./image-data";

import classes from "./ImageGallery.module.css";

import Modal from "../UI/Modal";
import MotionProgressiveImage from "./ProgressiveImage";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ImageGallery = () => {
  const [openModal, setOpenModal] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);

  const openModalHandler = (index) => {
    setPage([index, 0]);
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Fragment>
      {openModal && (
        <Modal
          backdropClassName={classes.galleryBackdrop}
          modalClassName={classes.galleryModal}
          onClose={closeModalHandler}
        >
          <AnimatePresence initial={false} custom={direction}>
            <div className={classes.fullscreenImage}>
              <MotionProgressiveImage
                key={page}
                src={images[imageIndex].img}
                placeholderSrc={images[imageIndex].thumb}
                width={images[imageIndex].width}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              />
            </div>
          </AnimatePresence>
          <div className={classes.next} onClick={() => paginate(1)}>
            {"‣"}
          </div>
          <div className={classes.prev} onClick={() => paginate(-1)}>
            {"‣"}
          </div>
        </Modal>
      )}
      <div className={classes.galleryWrapper}>
        {images.map((slide, index) => {
          return (
            <div className={classes.singleImage} key={index}>
              <img
                src={slide.thumb}
                alt="Slika"
                onClick={() => openModalHandler(index)}
              />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ImageGallery;
