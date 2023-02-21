import { FC } from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import withDropDown from "./withDropDown";

const Navigation: FC = () => {
    const SubMenu = withDropDown(Menu);

    return ( 
        <nav>
            <Menu className="menu--navigation">
                <MenuItem>
                    <NavLink to="/">Home</NavLink>
                </MenuItem>
                <MenuItem>
                    <SubMenu title={<NavLink to="/tutorial">Tutorial</NavLink>} collapsed={true}>
                        <MenuItem>Step 1</MenuItem>
                        <MenuItem>Step 2</MenuItem>
                        <MenuItem>Step 3</MenuItem>
                        <MenuItem>Step 4</MenuItem>
                        <MenuItem>Step 5</MenuItem>
                    </SubMenu>
                </MenuItem>
                <MenuItem>Useful links</MenuItem>
                <MenuItem>
                <NavLink to="/reviews">Reviews</NavLink>
                </MenuItem>
            </Menu>
        </nav>
    );
};

export default Navigation;