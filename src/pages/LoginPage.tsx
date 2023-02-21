import { FC } from "react";
import LoginForm from "../components/LoginForm";
import Page from "../shared/Page";

const LoginPage: FC = () => {
    return (
        <Page>
            <h1>Log in here</h1>
            <LoginForm />
        </Page>
    );
};

export default LoginPage;