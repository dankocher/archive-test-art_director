import React from "react";
import { useDispatch } from "react-redux";
import "./CarouselArrow.css";

import {
  positiveIterateImageIndex,
  negativeIterateImageIndex,
} from "../../actions";

function CarouselArrow(props) {
  const dispatch = useDispatch();

  const handlerLeftArrow = () => {
    dispatch(negativeIterateImageIndex());
  };
  const handlerRightArrow = () => {
    dispatch(positiveIterateImageIndex());
  };

  return (
    <>
      {props.direction === "left" ? (
        <button
          className="hidden-button carouselArrow-left"
          onClick={handlerLeftArrow}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect
              x="48"
              y="48"
              width="48"
              height="48"
              rx="4"
              transform="rotate(-180 48 48)"
              fill="#D1D1D9"
            />
            <path
              d="M26.8431 32.5533C26.6587 32.554 26.4765 32.5133 26.3099 32.4343C26.1432 32.3552 25.9964 32.2399 25.8802 32.0967L19.9176 24.6917C19.736 24.4709 19.6367 24.1939 19.6367 23.908C19.6367 23.6221 19.736 23.3451 19.9176 23.1243L26.0901 15.7193C26.2996 15.4672 26.6007 15.3087 26.9272 15.2787C27.2536 15.2486 27.5786 15.3494 27.8307 15.5588C28.0829 15.7683 28.2414 16.0694 28.2715 16.3957C28.3016 16.7221 28.2008 17.047 27.9912 17.299L22.473 23.9142L27.8061 30.5293C27.957 30.7105 28.0529 30.9311 28.0824 31.165C28.1119 31.3989 28.0737 31.6364 27.9724 31.8493C27.8711 32.0623 27.7109 32.2417 27.5108 32.3665C27.3107 32.4913 27.079 32.5561 26.8431 32.5533Z"
              fill="white"
            />
          </svg>
        </button>
      ) : (
        <button
          className="hidden-button carouselArrow-right"
          onClick={handlerRightArrow}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="4" fill="#D1D1D9" />
            <path
              d="M21.1569 15.4467C21.3413 15.446 21.5235 15.4867 21.6901 15.5657C21.8568 15.6448 22.0036 15.7601 22.1198 15.9033L28.0824 23.3083C28.264 23.5291 28.3633 23.8061 28.3633 24.092C28.3633 24.3779 28.264 24.6549 28.0824 24.8757L21.9099 32.2807C21.7004 32.5328 21.3993 32.6913 21.0728 32.7213C20.7464 32.7514 20.4214 32.6506 20.1693 32.4412C19.9171 32.2317 19.7586 31.9306 19.7285 31.6043C19.6984 31.2779 19.7992 30.953 20.0088 30.701L25.527 24.0858L20.1939 17.4707C20.043 17.2895 19.9471 17.0689 19.9176 16.835C19.8881 16.6011 19.9263 16.3636 20.0276 16.1507C20.1289 15.9377 20.2891 15.7583 20.4892 15.6335C20.6893 15.5087 20.921 15.4439 21.1569 15.4467Z"
              fill="white"
            />
          </svg>
        </button>
      )}
    </>
  );
}

export default CarouselArrow;
