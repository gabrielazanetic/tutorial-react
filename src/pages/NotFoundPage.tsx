import { FC } from "react";
import Page from "../shared/Page";

interface NotFoundPageProps {
    isLoggedIn: boolean
}

const NotFoundPage: FC<NotFoundPageProps> = ({ isLoggedIn }) => {
    return (
        <Page isLoggedIn={isLoggedIn}>
            <h1>404 PAGE</h1>
        </Page>
    );
}

export default NotFoundPage;