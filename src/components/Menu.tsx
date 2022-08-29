import { FC, ReactNode, useState } from "react";

interface MenuProps {
    children: ReactNode,
    title?: string
    collapsed?: boolean
}

const Menu: FC<MenuProps> = ({ children, title, collapsed = false }) => {
const [isCollapsed, setIsCollapsed] = useState(collapsed);

    const classes = "menu" + (isCollapsed ? " collapsed" : "");

    const toggleMenu = () => {
        if(isCollapsed) {
            setIsCollapsed(false);
        } else {
            setIsCollapsed(true);
        }
    }

    return (
        <>
            {title && <h4 onClick={toggleMenu}>{title}</h4>}
            <ul className={classes}>{children}</ul>
        </>
    );
}

export default Menu;