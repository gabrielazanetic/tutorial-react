import { FC } from "react";
import Page from "../shared/Page";

interface HomePageProps {
    isLoggedIn: boolean
}

const HomePage: FC<HomePageProps> = ({ isLoggedIn }) => {
    return (
        <Page isLoggedIn={isLoggedIn}>
            <p>Welcome to the React tutorial!</p>
        </Page>
    );
};

export default HomePage;