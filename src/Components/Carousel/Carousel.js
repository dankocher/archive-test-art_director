import React from "react";
import "./Carousel.css";

import CarouselArrow from "../CarouselArrow/CarouselArrow";
import CarouselBullets from "../CarouselBullets/CarouselBullets";

const arrOfImages = [1, 2, 3, 4, 5, 6];

function Carousel() {
  const [imageList, setImageList] = useState("");

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=10")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((result) => {
        setImageList(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="centred-content--Carousel">
      <CarouselArrow direction="left" />
      <img
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        src={"https://picsum.photos/2500/1200"}
        alt={""}
      />
      <CarouselArrow direction="right" />
      <CarouselBullets arrOfImages={arrOfImages} active={2} />;
    </div>
  );
}

export default Carousel;
