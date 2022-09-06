import { FC } from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const Navigation: FC = () => {
    return ( 
        <nav>
            <Menu className="menu--navigation">
                <MenuItem>
                    <NavLink to="/">Home</NavLink>
                </MenuItem>
                <MenuItem>
                    <Menu title={<NavLink to="/tutorial">Tutorial</NavLink>} canCollapse={true} collapsed={true}>
                        <MenuItem>Step 1</MenuItem>
                        <MenuItem>Step 2</MenuItem>
                        <MenuItem>Step 3</MenuItem>
                        <MenuItem>Step 4</MenuItem>
                        <MenuItem>Step 5</MenuItem>
                    </Menu>
                </MenuItem>
                <MenuItem>Useful links</MenuItem>
                <MenuItem>Reviews</MenuItem>
            </Menu>
        </nav>
    );
};

export default Navigation;