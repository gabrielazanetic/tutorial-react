import { FC, ReactNode } from "react";

interface MenuProps {
    children: ReactNode,
    title?: string
    collapsed?: boolean
}

const Menu: FC<MenuProps> = ({ children, title, collapsed }) => {
    const classes = "menu" + (collapsed ? " collapsed" : "");

    return (
        <>
            {title && <h4>{title}</h4>}
            <ul className={classes}>{children}</ul>
        </>
    );
}

export default Menu;