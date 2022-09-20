import { FC, useContext, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { AuthContext, UserContext } from "../utils/context";
import { isEmailValid, isFilled, isLongerThan, isPasswordMatching } from "../utils/validators";

const RegistrationForm: FC = () => {

    const fullnameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmRef = useRef<HTMLInputElement>(null);

    const userContext = useContext(UserContext);
    const authContext = useContext(AuthContext);

    const navigate = useNavigate();

    const formValues = {
        fullname: "",
        birthday: new Date(),
        email: "",
        username: "",
        password: "",
        confirm: ""
    };
    const inputMessages = {
        fullname: [""],
        birthday: [""],
        email: [""],
        username: [""],
        password: [""],
    };

    const [registrationData, setRegistrationData] = useState(formValues);
    const [messages, setMessages] = useState(inputMessages);

    const handleDateChange = (date: Date | null) => {
        if(date !== null) {
            const birthday = {birthday: date}
            const newRegistrationData = {...registrationData, ...birthday};
            setRegistrationData(newRegistrationData);
        }
    };

    const handleInputChange = (e: any) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        
        const inputData = {[inputName]: inputValue};
        const newRegistrationData = {...registrationData, ...inputData};
        setRegistrationData(newRegistrationData);
    };

    const handleFormSubmit = (e: any) => {
        e.preventDefault();

        let failed = false;

        // fullname
        let fullnameMessages = [];

        if(!isFilled(fullnameRef?.current?.value)) {
            fullnameMessages.push("Full name cannot be empty."); 
            failed = true;
        }

        if(!isLongerThan(fullnameRef?.current?.value, 2)) {
            fullnameMessages.push("Full name must be at least 2 characters long."); 
            failed = true;
        }

        // email
        let emailMessages = [];

        if(!isFilled(emailRef?.current?.value)) {
            emailMessages.push("Email cannot be empty."); 
            failed = true;
        }

        if(!isEmailValid(emailRef?.current?.value)) {
            emailMessages.push("Text entered is not a valid email address."); 
            failed = true;
        }

        // username
        let usernameMessages = [];

        if(!isFilled(usernameRef?.current?.value)) {
            usernameMessages.push("Username cannot be empty."); 
            failed = true;
        }

        if(!isLongerThan(usernameRef?.current?.value, 4)) {
            usernameMessages.push("Username must be at least 4 characters long."); 
            failed = true;
        }

        // password
        let passwordMessages = [];

        if(!isFilled(passwordRef?.current?.value)) {
            passwordMessages.push("Password cannot be empty."); 
            failed = true;
        }

        if(!isLongerThan(passwordRef?.current?.value, 8)) {
            passwordMessages.push("Password must be at least 8 characters long."); 
            failed = true;
        }

        if(!isPasswordMatching(passwordRef?.current?.value, confirmRef?.current?.value)) {
            passwordMessages.push("Passwords don't match."); 
            failed = true;
        }

        setMessages({
            ...messages, 
            ...{fullname: fullnameMessages}, 
            ...{email: emailMessages}, 
            ...{username: usernameMessages}, 
            ...{password: passwordMessages}
        });

        if(!failed) {
            const {password, confirm, ...newUser} = registrationData;
            userContext.setAuthUser(newUser);
            authContext.toggleAuth();
            navigate("/my-profile");
        }
    };

    return (
        <form id="registration-form"  className="form registration-form" onSubmit={handleFormSubmit}>

            <div className={"form-element fullname" + (messages.fullname[0]?.length ? " error" : "")}>
                <label htmlFor="fullname">Full Name: </label>
                <input ref={fullnameRef} type="text" name="fullname" value={registrationData.fullname} onChange={handleInputChange} />
                {messages.fullname.length ? <small className="message fullname-message">{messages.fullname.join(" ")}</small> : ""}
            </div>
            <div className="form-element birthday">
                <label htmlFor="birthday">Date of Birth: </label>
                <DatePicker dateFormat="dd-MM-yyyy" selected={registrationData.birthday} onChange={(date) => handleDateChange(date)} />
            </div>
            <div className={"form-element email" + (messages.email[0]?.length ? " error" : "")}>
                <label htmlFor="email">Email address: </label>
                <input ref={emailRef} type="email" name="email" value={registrationData.email} onChange={handleInputChange} />
                {messages.email.length ? <small className="message email-message">{messages.email.join(" ")}</small> : ""}
            </div>
            <div className={"form-element username" + (messages.username[0]?.length ? " error" : "")}>
                <label htmlFor="username">Username: </label>
                <input ref={usernameRef} type="text" name="username" value={registrationData.username} onChange={handleInputChange} />
                {messages.username.length ? <small className="message username-message">{messages.username.join(" ")}</small> : ""}
            </div>
            <div className={"form-element password" + (messages.password[0]?.length ? " error" : "")}>
                <label htmlFor="password">Password: </label>
                <input ref={passwordRef} type="password" name="password" value={registrationData.password} onChange={handleInputChange} />
                {messages.password.length ? <small className="message password-message">{messages.password.join(" ")}</small> : ""}
            </div>
            <div className={"form-element confirm" + (messages.password[0]?.length ? " error" : "")}>
                <label htmlFor="confirm">Confirm password: </label>
                <input ref={confirmRef} type="password" name="confirm" value={registrationData.confirm} onChange={handleInputChange} />
            </div>
            <div className="form-element submit">
                <input type="submit" name="submit" value="Register" className="btn" />
            </div>
        </form>
    );
}

export default RegistrationForm;