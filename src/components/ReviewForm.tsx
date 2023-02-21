import { FC, useRef, useState } from "react";
import Rating from "./Rating";
import TextInput from "./TextInput";

interface ReviewFormProps {
	reviewsList: any;
	setReviewsList: any;
}

const ReviewForm: FC<ReviewFormProps> = ({ reviewsList, setReviewsList }) => {
	const titleRef = useRef();
	const reviewTextRef = useRef();

	const values = {
		title: "",
		text: "",
		score: "",
	};

	const [formValues, setFormValues] = useState(values);

	const handleTitleChange = (event: any) => {
		const title = event.target.value;
		setFormValues({
			...formValues,
			title,
		});
	};

	const handleTextChange = (event: any) => {
		const text = event.target.value;
		setFormValues({
			...formValues,
			text,
		});
	};

	const handleRatingChange = (score: number) => {
		let scoreString = "";

		for (let i = 1; i <= score; i++) {
			scoreString += "*";
		}

		console.log(scoreString);

		setFormValues({
			...formValues,
			score: scoreString,
		});
	};

	const handleFormSubmit = (event: any) => {
		event.preventDefault();

		let id = 0;
		reviewsList.map((review: any) => {
			if (review.id > id) {
				id = review.id;
			}
			return true;
		});
		const newReview = {
			id: id + 1,
			date: new Date(),
			title: formValues.title,
			score: formValues.score,
			review: formValues.text,
		};

		setReviewsList([...reviewsList, newReview]);
	};

	return (
		<form
			id="review_form"
			className="form"
			style={{ margin: "25px auto" }}
			onSubmit={handleFormSubmit}
		>
			<Rating handleRatingChange={handleRatingChange} />
			<label>Title of review:</label>
			<TextInput
				type="text"
				name="review_title"
				ref={titleRef}
				onChange={handleTitleChange}
				value={formValues.title}
			/>
			<br />
			<label>Text of review:</label>
			<TextInput
				type="text"
				name="review_text"
				ref={reviewTextRef}
				onChange={handleTextChange}
				value={formValues.text}
			/>
			<br />
			<input
				type="submit"
				name="submit_review"
				id="submit_review"
				className="btn"
				value="Submit Review"
			/>
		</form>
	);
};

export default ReviewForm;
