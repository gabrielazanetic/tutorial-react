import { FC, useContext, useState } from "react";
import { users } from "../data/users";
import { AuthContext } from "../utils/context";

const LoginForm: FC = () => {
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");

    const auth = useContext(AuthContext);

    const handleTextChange = (e: any) => {
        setText(e.target.value);
    };

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const authUser = users.find((user) => user.username === text && user.password === password);

        if(authUser !== undefined) {
            auth.toggleAuth();
        }
    };

    return (
        <form id="login-form" className="login-form" onSubmit={handleSubmit}>
            <div className="username">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" value={text} onChange={handleTextChange} />
            </div>
            <div className="password">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div className="submit">
                <label htmlFor="submit"></label>
                <input type="submit" name="submit" id="submit" value="Log in" />
            </div>
        </form>
    );
};

export default LoginForm;