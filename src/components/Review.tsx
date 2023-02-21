import { FC } from "react";

interface ReviewProps {
	review: any;
}

const Review: FC<ReviewProps> = ({ review }) => {
	const date = new Date(review.date).toDateString();

	return (
		<div style={{ margin: "0 auto 25px", maxWidth: "800px" }}>
			<h2>{review.title}</h2>
			<p>{date}</p>
			<strong>{review.score}</strong>
			<p>{review.review}</p>
		</div>
	);
};

export default Review;
