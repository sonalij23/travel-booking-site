import React from "react";
import gallery1 from "../images/gallery-01.jpg";
import gallery2 from "../images/gallery-02.jpg";
import gallery3 from "../images/gallery-03.jpg";
import gallery4 from "../images/gallery-04.jpg";
import gallery5 from "../images/gallery-05.jpg";
import gallery6 from "../images/gallery-06.jpg";
import gallery7 from "../images/gallery-07.jpg";
import gallery8 from "../images/gallery-08.jpg";

const images = [
  gallery1,
  gallery5,
  gallery2,
  gallery6,
  gallery3,
  gallery8,
  gallery4,
  gallery7,
];

const Gallery = () => {
  return (
    <div className="px-5 mt-24 md:px-24">
      <div className="text-left mb-14">
        <span className="inline-block md:p-2 p-1 text-[8px] md:text-base bg-primary-color rounded-3xl">
          Gallery
        </span>
        <h1 className="mt-4 text-lg font-semibold md:mt-10 md:text-4xl">Visit our customers tour gallery</h1>
      </div>
      <div className="gap-5 space-y-5 md:columns-4 columns-2">
        {images.map((image, index) => (
          <img
            className="object-cover rounded-xl hover:ease-out hover:duration-300 hover:scale-105 "
            key={index}
            src={image}
            alt="img"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
