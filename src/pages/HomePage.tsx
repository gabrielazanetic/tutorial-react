import { FC } from "react";
import Lifecycle from "../components/Lifecycle";
import Page from "../shared/Page";

const HomePage: FC = () => {
	return (
		<Page>
			<p>Welcome to the React tutorial!</p>
			<Lifecycle />
		</Page>
	);
};

export default HomePage;
