import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
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
                <MenuItem><NavLink to="/my-profile">My profile</NavLink></MenuItem>
                <MenuItem><Link to="/logout">Log out</Link></MenuItem>
            </>
        );
    }
    return <Menu className="menu--user-actions">{userActions}</Menu>;
}

export default UserActions;