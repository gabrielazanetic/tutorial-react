import { FC, useCallback, useMemo, useState } from "react";

import Review from "./Review";

interface ReviewListProps {
	reviewsList: any;
	setReviewsList: any;
}

const ReviewList: FC<ReviewListProps> = ({ reviewsList, setReviewsList }) => {
	const [isAsc, setIsAsc] = useState(true);

	const handleDateSort = useCallback(() => {
		console.log("date sort");
		const reviewsCopy = [...reviewsList];
		const reviews = reviewsCopy.sort((rA: any, rB: any) => {
			if (isAsc) {
				return rA.date > rB.date ? 1 : -1;
			} else {
				return rA.date < rB.date ? 1 : -1;
			}
		});

		setReviewsList(reviews);
	}, [isAsc, reviewsList, setReviewsList]);

	const handleTitleSort = () => {
		const reviewsCopy = [...reviewsList];
		const reviews = reviewsCopy.sort((rA: any, rB: any) => {
			if (isAsc) {
				return rA.title > rB.title ? 1 : -1;
			} else {
				return rA.title < rB.title ? 1 : -1;
			}
		});

		setReviewsList(reviews);
	};

	const handleScoreSort = useCallback(() => {
		const reviewsCopy = [...reviewsList];
		const reviews = reviewsCopy.sort((rA: any, rB: any) => {
			if (isAsc) {
				return rA.score.length > rB.score.length ? 1 : -1;
			} else {
				return rA.score.length < rB.score.length ? 1 : -1;
			}
		});

		setReviewsList(reviews);
	}, [isAsc, reviewsList, setReviewsList]);

	const handleDirection = () => {
		if (isAsc) {
			setIsAsc(false);
		} else {
			setIsAsc(true);
		}
	};

	const reviewsComponentList = useMemo(() => {
		return reviewsList.map((review: any) => {
			return <Review key={review.id} review={review} />;
		});
	}, [reviewsList]);

	return (
		<div className="reviews">
			<button className="btn" onClick={handleDateSort}>
				Order by date
			</button>
			<button
				className="btn"
				onClick={handleTitleSort}
				style={{ margin: "0 10px" }}
			>
				Order by title
			</button>
			<button className="btn" onClick={handleScoreSort}>
				Order by score
			</button>
			<button
				className="btn"
				style={{ marginLeft: "10px" }}
				onClick={handleDirection}
			>
				{isAsc ? "Ascending" : "Descending"}
			</button>

			{reviewsComponentList}
		</div>
	);
};

export default ReviewList;
