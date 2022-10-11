import { ReactNode, useState } from "react";

interface SubmenuProps {
    children: ReactNode,
    title: string | ReactNode,
    collapsed: boolean,
    className?: string
}

const withDropDown = (Menu: any) => {
    return ({ children, title, collapsed = false, className = '' }: SubmenuProps) => {
        const [isCollapsed, setIsCollapsed] = useState(collapsed);
    
        const classes = (isCollapsed ? " collapsed" : "") 
            + (className.length ? " " + className : "");
    
        const openMenu = () => {
            setIsCollapsed(false);
        }
    
        const closeMenu = () => {
            setIsCollapsed(true);
        };
    
        return (
            <div onMouseLeave={closeMenu}>
                {title && <div onMouseEnter={openMenu}>{title}</div>}
                <Menu className={classes}>{children}</Menu>
            </div>
        );
    };
};

export default withDropDown;