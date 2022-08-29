import { FC } from "react";
import Navigation from "../components/Navigation";

const Page: FC = () => {
    const logo = require("../logo.svg").default;

    return (
        <header>
            {/* logo and title */}
            <div className="logo">
                <img src={logo} alt="Logo" className="logo__image" />
                <h3 className="logo__text">React Tutorial 2022</h3>
            </div>

            {/* navigation */}
                {/* menu */}
                    {/* menu items */}
            <Navigation />

            {/* login and registration / user menu */}
        </header>
    );
}

export default Page;