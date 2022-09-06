import { FC } from "react";
import Page from "../shared/Page";

const ProfilePage: FC = () => {
    return (
        <Page isLoggedIn={true}>
            <h1>Profile Page</h1>
        </Page>
    );
};

export default ProfilePage;