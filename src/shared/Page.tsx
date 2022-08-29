import { FC } from "react";

const Page: FC = () => {
    const logo = require("../logo.svg").default;

    return (
        <>
            {/* logo */}
            <img src={logo} alt="Logo" />

            {/* navigation */}
            {/* login and registration / user menu */}
        </>
    );
}

export default Page;