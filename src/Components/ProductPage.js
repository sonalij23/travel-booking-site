import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { DestinationsState } from "../context/ToursContext";
import GetReviewsData from "../services/review.services";

const ProductPage = ({ featuredOnly }) => {
  const { tours, searchParams } = DestinationsState();
  const [rating, setRating] = useState({});
  const [page, setPage] = useState(1);

  const toursToDisplay =
    featuredOnly === true
      ? tours.filter((tour) => {
          let featured = tour.featured === true;
          return featured;
        })
      : tours;

  useEffect(() => {
    const fetchRatings = async () => {
      const ratingsData = await Promise.all(
        tours.map(async (tour) => {
          const data = await GetReviewsData.getAllReviews();

          const allProductReviews = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          const filterTourReview = allProductReviews.filter(
            (review) => tour.id === review.productId
          );
          const totalRating = filterTourReview.reduce(
            (sum, obj) => sum + obj.rating,
            0
          );
          const avgRating =
            totalRating > 0
              ? parseFloat(totalRating / filterTourReview.length).toFixed(2)
              : 0;

          const ratingCount = filterTourReview.length;

          return { tourId: tour.id, rating: avgRating, ratingCount };
        })
      );

      const updatedRatings = {};
      ratingsData.forEach(({ tourId, rating, ratingCount }) => {
        updatedRatings[tourId] = {
          rating: rating,
          ratingCount: ratingCount,
        };
      });

      setRating(updatedRatings);
    };
    fetchRatings();
  }, [tours]);

  const filteredTours = tours.filter((tour) => {
    const locationMatches = tour.city
      .toLowerCase()
      .includes(searchParams.location.toLowerCase());
    const distanceMatches = tour.distance >= searchParams.distance;
    const maxPeoplMatches = tour.maxGroupSize >= searchParams.maxPeople;

    return locationMatches && distanceMatches && maxPeoplMatches;
  });

  const handlePagination = (i)=>{
    setPage(i+1)
  }

  return (
    <div className="px-3 md:px-24">
      {searchParams.location ||
      searchParams.distance ||
      searchParams.maxPeople ? (
        filteredTours.length > 0 ? (
          <div className="grid w-full grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
            {filteredTours.map((tour) => (
              <ProductCard tour={tour} key={tour.id} rating={rating} />
            ))}
          </div>
        ) : (
          <p> No tours found</p>
        )
      ) : (
        toursToDisplay.length > 0 && (
          <div>
            <div className="grid w-full grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
              {toursToDisplay.slice(page * 8 - 8, page * 8).map((tour) => (
                <ProductCard tour={tour} key={tour.id} rating={rating} />
              ))}
            </div>
            <div className="mt-14">
              {[1, 2].map((_, i) => (
                <span className={`px-3 py-1 mx-4 rounded-full border-[1px] border-primary-color  font-semibold ${page === i+1? 'bg-primary-color':''} ${featuredOnly? 'hidden':''}`}  onClick={()=>handlePagination(i)} key={i}>{i + 1}</span>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProductPage;
