import { FC } from "react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { NavLink } from "react-router-dom";

const Navigation: FC = () => {

    return ( 
        <nav>
            <Menu>
                <MenuItem>
                    <h4>Home</h4>
                </MenuItem>
            </Menu>
        </nav>
    );
};

export default Navigation;