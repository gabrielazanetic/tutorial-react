import { createContext } from "react";

export const AuthContext = createContext({
    loggedIn: false,
    toggleAuth: () => {}
});

export const UserContext = createContext({
    fullname: "",
    birthday: new Date(),
    email: "",
    username: "",
    setAuthUser: (user: any) => {}
});