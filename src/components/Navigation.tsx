import { FC } from "react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const Navigation: FC = () => {
    return ( 
        <nav>
            <Menu className="menu--navigation">
                <MenuItem>Home</MenuItem>
                <MenuItem>
                    <Menu title="Tutorial" collapsed={true}>
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