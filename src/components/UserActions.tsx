import { FC } from "react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const UserActions: FC = () => {
    const isLoggedIn = false;

    let userActions;

    if(isLoggedIn) {
        userActions = (
            <>
                <MenuItem>Login</MenuItem>
                <MenuItem>Register</MenuItem>
            </>
        );
    } else {
        userActions = (
            <>
                <MenuItem>My profile</MenuItem>
                <MenuItem>Log out</MenuItem>
            </>
        );
    }
    return <Menu>{userActions}</Menu>;
}

export default UserActions;