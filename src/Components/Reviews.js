import React, { useEffect, useState } from "react";
import { GoStarFill } from "react-icons/go";
import avatar from "../images/avatar.jpg";
import { useUserAuth } from "../context/UserAuthContext";
import GetReviewsData from "../services/review.services";
import { useNavigate } from "react-router-dom";



const Reviews = ({ tour }) => {
  const { user } = useUserAuth();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [userName, setUserName] = useState("");
  const [productId, setProductId] = useState(0);
  const [reviewDate, setReviewDate] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [displayReviews, setdisplayReviews] = useState([]);
  const [reviewSubmit, setReviewSubmit] = useState(false);
  

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

  if(!user){
    navigate("/login")
    return;
  }

    if (rating === 0 || review === "") {
      setMessage({ error: true, msg: "Please provide rating and review." });
      return;
    }

    const newReview = {
      rating,
      productId,
      review,
      date: reviewDate,
      name: userName,
    };
    console.log(newReview);

    try {
      await GetReviewsData.addReviews(newReview);
      setMessage({ error: false, msg: "Thank you for the review!" });
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setReviewSubmit(true);
    setRating(0);
    setReview("");
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setReview(input);

    const fetchDate = () => {
      let d = new Date();
      let date = d.getDate();
      let month = d.toLocaleString("en-IN", { month: "long" });
      let year = d.getFullYear();
      let fullDate = `${month} ${date}, ${year}`;
      setReviewDate(fullDate);
    };
    fetchDate();
    setProductId(tour.id);
    setUserName(user ? user.displayName : '');
  };

  useEffect(() => {
    getReviews();
  }, [reviewSubmit]);

  const getReviews = async () => {
 
    const data = await GetReviewsData.getAllReviews();
    setReviewSubmit(false);

    const allProductReviews = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    let filterReview = allProductReviews.filter(
      (review) => review.productId === tour.id
    );

    setdisplayReviews(filterReview);
  };

  return (
    <div className="md:p-10 p-5 text-left rounded-lg border-[1px] my-8 border-solid">
      <h1 className="mb-8 text-lg font-semibold text-left md:mb-16 md:text-2xl ">
        Reviews
      </h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex mb-10">
            {[1, 2, 3, 4, 5].map((star) => (
              <GoStarFill
                key={star}
                onClick={() => handleStarClick(star)}
                className={`md:text-4xl text-lg mr-1 ${
                  star <= rating ? "text-yellow-400" : "text-gray-500"
                }`}
              />
            ))}
          </div>

          <div className="md:p-3 p-2 flex justify-between border-[1px] border-solid rounded-full border-secondary-color">
            <input
              className="w-3/4 text-xs outline-none md:text-base"
              type="text"
              placeholder="Share your thoughts"
              onChange={(e) => handleInputChange(e)}
              value={review}
            />
            <button
              className="px-2 py-1 text-xs text-white rounded-full md:text-base md:px-4 md:py-2 bg-primary-color"
              type="submit"
            >
              Submit
            </button>
          </div>
          <p className="mx-5 my-2 md:text-sm text-[10px] text-red-500">
            {message.msg}
          </p>
        </form>
      </div>

      {displayReviews.map((doc) => (
        <div className="flex mt-10 " key={doc.id}>
          <div>
            <img
              className="w-10 h-10 md:w-16 md:h-16"
              src={avatar}
              alt="avatar"
            />
          </div>
          <div className="w-full ml-2 ">
            <div className="flex items-center justify-between ">
              <div>
                <h3 className="text-sm font-semibold md:text-base">
                  {doc.name}
                </h3>
                <p className="text-xs text-slate-500 md:text-base">
                  {doc.date}
                </p>
              </div>
              <div className="flex items-center text-slate-500">
                {doc.rating}
                <GoStarFill className="ml-2 text-primary-color" />
              </div>
            </div>

            <p className="mt-5 text-xs font-semibold text-slate-500 md:text-base">
              {doc.review}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
