import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ava1 from "../images/ava-1.jpg";
import ava2 from "../images/ava-2.jpg";
import ava3 from "../images/ava-3.jpg";
import ava4 from "../images/avatar.jpg";

const reviews = [
  { id: 0, img: ava1, name: "John Deo" },
  { id: 1, img: ava2, name: "Catherine Jo" },
  { id: 2, img: ava3, name: "Peter Alice" },
  { id: 3, img: ava4, name: "John Deo" },
];

const ReviewCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="px-5 mt-24 md:px-24">
      <div className="text-left">
        <span className="inline-block md:p-2 p-1 text-[8px] md:text-base bg-primary-color rounded-3xl">
          Clients Love
        </span>
        <h1 className="mt-8 text-lg font-semibold md:text-3xl">
          What our clients say about us
        </h1>
      </div>
      <Carousel infinite={true}
        className="mt-5 md:mt-12"
        responsive={responsive}
        arrows={false}
        autoPlay={true}
        showDots={true}
        autoPlaySpeed	= {3000}
      >
        {reviews.map((review) => (
          <div className="mx-4 text-left mb-14" key={review.id}>
            <p className="text-xs md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
              auctor augue mauris augue neque gravida in fermentum et. Tortor
              aliquam nulla facilisi cras fermentum. Enim ut sem viverra
              aliquet.
            </p>
            <div className="flex mt-4">
              <img
                className="object-cover w-10 h-8 rounded-md md:w-16 md:h-16" 
                src={review.img}
                alt="review-img"
              />
              <div className="ml-2" >
              <h4 className="text-sm font-semibold md:text-lg">{review.name}</h4>
              <p className="text-xs md:text-base" > Customer</p></div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewCarousel;
