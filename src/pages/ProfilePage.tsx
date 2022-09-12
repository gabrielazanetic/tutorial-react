import { FC, useContext } from "react";
import { Navigate } from "react-router-dom";
import Page from "../shared/Page";
import { AuthContext } from "../utils/context";
import LoginPage from "./LoginPage";

const ProfilePage: FC = () => {
    const authContext = useContext(AuthContext);

    if(authContext.loggedIn === true) {
        return (
            <Page>
                <h1>Profile Page</h1>
            </Page>
        );
    }

    return <Navigate to="/login" />;
};

export default ProfilePage;