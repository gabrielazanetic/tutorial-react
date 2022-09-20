import { FC, useContext, useState } from "react";
import { users } from "../data/users";
import { AuthContext } from "../utils/context";

const LoginForm: FC = () => {
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");

    const authContext = useContext(AuthContext);

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
            authContext.toggleAuth();
        }
    };

    return (
        <form id="login-form" className="form login-form" onSubmit={handleSubmit}>
            <div className="form-element username">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" value={text} onChange={handleTextChange} />
            </div>
            <div className="form-element password">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div className="form-element submit">
                <input type="submit" name="submit" id="submit" className="btn" value="Log in" />
            </div>
        </form>
    );
};

export default LoginForm;