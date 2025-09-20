import { GoogleOAuthProvider } from "@react-oauth/google";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const CLIENT_ID = "813985617007-uiqlskutinet483mcebfor0en6ld8r9d.apps.googleusercontent.com"

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedin, setIsLoggedin] = useState(false);

    const value = {
        currentUser,
        isLoggedin,
        setIsLoggedin,
        setCurrentUser
    }

    return (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </GoogleOAuthProvider>
    )
}