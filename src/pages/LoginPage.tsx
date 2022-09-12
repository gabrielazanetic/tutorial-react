import { FC } from "react";
import LoginForm from "../components/LoginForm";
import Page from "../shared/Page";

const LoginPage: FC = () => {
    return (
        <Page>
            <h2>Log in here</h2>
            <LoginForm />
        </Page>
    );
};

export default LoginPage;