import ReviewForm from "components/ReviewForm";
import { FC, useState } from "react";
import ReviewList from "../components/ReviewList";
import Page from "../shared/Page";
import { reviews } from "../data/reviews";

const ReviewsPage: FC = () => {
	const [reviewsList, setReviewsList] = useState(reviews);

	return (
		<Page>
			<h1>Reviews</h1>

			<ReviewForm reviewsList={reviewsList} setReviewsList={setReviewsList} />

			<ReviewList reviewsList={reviewsList} setReviewsList={setReviewsList} />
		</Page>
	);
};

export default ReviewsPage;
