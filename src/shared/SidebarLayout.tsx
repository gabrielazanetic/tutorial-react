import { FC, ReactNode } from "react";

interface SidebarLayoutProps {
    left: ReactNode,
    right: ReactNode
}

const SidebarLayout: FC<SidebarLayoutProps> = ({ left, right }) => {
    return (
        <div className="container container--with-sidebar">
            <div className="column column--sidebar">{ left }</div>
            <div className="column column--main">{ right }</div>
        </div>
    );
};

export default SidebarLayout;