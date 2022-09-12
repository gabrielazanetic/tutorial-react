import { FC, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../utils/context";
import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";

interface AuthPageProps {
    removeAuth?: boolean
};

const AuthPage: FC<AuthPageProps> = ({ removeAuth }) => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        if(removeAuth === true) {
            authContext.toggleAuth();
        }
    }, [removeAuth]);

    if(authContext.loggedIn === true) {
        return <Navigate to="/my-profile" replace={true} />
    } else {
        return <LoginPage />
    }
};

export default AuthPage;