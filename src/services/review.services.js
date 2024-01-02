
import { db } from "../firebase";
import { collection, addDoc, getDocs,  } from "firebase/firestore";

const reviewCollectionRef = collection(db, "reviews");

class GetReviewsData {
  addReviews = (newReview) => {
    return addDoc(reviewCollectionRef, newReview);
  };

  getAllReviews = () => {
    return getDocs(reviewCollectionRef);
  };
}



export default new GetReviewsData()