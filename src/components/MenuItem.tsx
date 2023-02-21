import { FC, ReactNode } from "react";

interface MenuItemProps {
	children: ReactNode | string;
}

const MenuItem: FC<MenuItemProps> = ({ children }) => {
	return <li className="menu__item">{children}</li>;
};

export default MenuItem;
