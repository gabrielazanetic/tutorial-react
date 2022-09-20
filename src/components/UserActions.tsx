import { FC, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../utils/context";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const UserActions: FC = () => {
    const authContext = useContext(AuthContext);

    let userActions;

    if(!authContext.loggedIn) {
        userActions = (
            <>
                <MenuItem><NavLink to="/login">Login</NavLink></MenuItem>
                <MenuItem><NavLink to="/register">Register</NavLink></MenuItem>
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