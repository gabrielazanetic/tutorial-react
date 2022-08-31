import { FC, ReactNode, useState } from "react";
interface MenuProps {
    children: ReactNode,
    title?: ReactNode | string
    collapsed?: boolean,
    canCollapse?: boolean
    className?: string
}

type SubmenuProps = 
    | {
        canCollapse: true; 
        title: ReactNode | string
    }
    | {
        children: ReactNode;
        title?: never;
        collapsed?: never;
        canCollapse?: never;
        className?: string;
    }

type Props = MenuProps & SubmenuProps

const Menu: FC<Props> = ({ children, title, collapsed = false, canCollapse = false, className = "" }) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);

    const classes = "menu" 
        + (isCollapsed ? " collapsed" : "") 
        + (className.length ? " " + className : "");

    const openMenu = () => {
        if(canCollapse) setIsCollapsed(false);
    }

    const closeMenu = () => {
        if(canCollapse) setIsCollapsed(true);
    };

    return (
        <>
            {title && <div onMouseEnter={openMenu}>{title}</div>}
            <ul onMouseLeave={closeMenu} className={classes}>{children}</ul>
        </>
    );
}

export default Menu;