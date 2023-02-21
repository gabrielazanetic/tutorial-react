import { FC } from "react";
import RegistrationForm from "../components/RegistrationForm";
import Page from "../shared/Page";

const RegistrationPage: FC = () => {
    return (
        <Page>
            <h1>Register</h1>
            <RegistrationForm />
        </Page>
    );
}

export default RegistrationPage;