import { FC, ReactNode } from "react";

interface MenuProps {
    children: ReactNode
}

const Menu: FC<MenuProps> = ({ children }) => {
    return <ul className="menu">{children}</ul>;
}

export default Menu;