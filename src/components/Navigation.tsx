import { FC } from "react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const Navigation: FC = () => {

    return ( 
        <nav>
            <Menu>
                <MenuItem>
                    <h4>Home</h4>
                </MenuItem>
                <MenuItem>
                    <Menu title="Submenu" collapsed={true}>
                        <MenuItem>Submenu item</MenuItem>
                    </Menu>
                </MenuItem>
            </Menu>
        </nav>
    );
};

export default Navigation;