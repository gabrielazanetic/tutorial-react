import { FC, ReactNode } from "react";
interface MenuProps {
	children: ReactNode;
	title?: ReactNode | string;
	className?: string;
}

const Menu: FC<MenuProps> = ({ children, className = "" }) => {
	const classes = "menu" + (className.length ? " " + className : "");

	return <ul className={classes}>{children}</ul>;
};

export default Menu;
