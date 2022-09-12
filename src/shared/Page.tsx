import { FC, ReactNode } from "react";
import Navigation from "../components/Navigation";
import UserActions from "../components/UserActions";

interface PageProps {
    children: ReactNode,
    className?: string,
};

const Page: FC<PageProps> = ({ children, className }) => {
    const logo = require("../logo.svg").default;

    return (<>
        <header>
            {/* logo and title */}
            <div className="logo">
                <img src={logo} alt="Logo" className="logo__image" />
                <div className="logo__text"><strong>React Tutorial 2022</strong></div>
            </div>

            {/* navigation */}
                {/* menu */}
                    {/* menu items */}
            <Navigation />

            {/* login and registration / user menu */}
            <UserActions />
        </header>
        <main className={className}>
            {children}
        </main>
    </>);
}

export default Page;