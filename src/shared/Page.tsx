import { FC, useState } from "react";
import Navigation from "../components/Navigation";
import UserActions from "../components/UserActions";

const Page: FC = () => {
    const logo = require("../logo.svg").default;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
            <UserActions />
        </header>
    );
}

export default Page;