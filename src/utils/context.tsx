import { createContext } from "react";

export const AuthContext = createContext({
    loggedIn: false,
    toggleAuth: () => {}
});