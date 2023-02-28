import { FC, useState } from "react";

interface RatingProps {
	handleRatingChange: any;
}

const Rating: FC<RatingProps> = ({ handleRatingChange }) => {
	const [rating, setRating] = useState(0);

	return (
		<div className="star-container">
			{[...Array(5)].map((star, i) => {
				let index = "star-" + i;
				return (
					<button
						key={index}
						className="star"
						onClick={() => {
							setRating(i);
							handleRatingChange(i + 1);
						}}
					>
						<span className={i <= rating ? "yellow" : "lightgrey"}>
							&#9733;
						</span>
					</button>
				);
			})}
		</div>
	);
};

export default Rating;
