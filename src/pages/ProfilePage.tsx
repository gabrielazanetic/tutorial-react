import { FC, useContext } from "react";
import { Navigate } from "react-router-dom";
import Page from "../shared/Page";
import { AuthContext, UserContext } from "../utils/context";

const ProfilePage: FC = () => {
    const authContext = useContext(AuthContext);
    const userContext = useContext(UserContext);

    if(authContext.loggedIn === true) {
        return (
            <Page>
                <h1>Profile Page</h1>
                <div className="profile">
                    <h3 className="fullname">{userContext.fullname}</h3>
                    <div className="birthday">{userContext.birthday.toString()}</div>
                    <div className="email">{userContext.email}</div>
                    <div className="username">{userContext.username}</div>
                </div>
            </Page>
        );
    }

    return <Navigate to="/login" />;
};

export default ProfilePage;