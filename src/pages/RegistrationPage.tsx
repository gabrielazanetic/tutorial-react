import { FC } from "react";
import RegistrationForm from "../components/RegistrationForm";
import Page from "../shared/Page";

const RegistrationPage: FC = () => {
    return (
        <Page>
            <h2>Register</h2>
            <RegistrationForm />
        </Page>
    );
}

export default RegistrationPage;