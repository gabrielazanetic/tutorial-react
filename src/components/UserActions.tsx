import { FC } from "react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

interface UserActionsProps {
    status: boolean
};

const UserActions: FC<UserActionsProps> = ({ status = false }) => {
    let userActions;

    if(!status) {
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
    return <Menu className="menu--user-actions">{userActions}</Menu>;
}

export default UserActions;