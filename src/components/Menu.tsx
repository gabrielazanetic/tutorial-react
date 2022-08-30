import { FC, ReactNode, useState } from "react";

interface MenuProps {
    children: ReactNode,
    title?: string
    collapsed?: boolean,
    className?: string,
}

const Menu: FC<MenuProps> = ({ children, title, collapsed = false, className = "" }) => {
const [isCollapsed, setIsCollapsed] = useState(collapsed);

    const classes = "menu" 
        + (isCollapsed ? " collapsed" : "") 
        + (className.length ? " " + className : "");

    const toggleMenu = () => {
        if(isCollapsed) {
            setIsCollapsed(false);
        } else {
            setIsCollapsed(true);
        }
    }

    return (
        <>
            {title && <strong onClick={toggleMenu}>{title}</strong>}
            <ul className={classes}>{children}</ul>
        </>
    );
}

export default Menu;