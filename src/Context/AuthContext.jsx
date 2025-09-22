import { GoogleOAuthProvider } from "@react-oauth/google";
import { createContext, useContext, useEffect, useState } from "react";
import { io } from 'socket.io-client'

const AuthContext = createContext();
const CLIENT_ID = "813985617007-uiqlskutinet483mcebfor0en6ld8r9d.apps.googleusercontent.com"
const sessionId = "asdjaQdsaAsjDkKJSkak"

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [attendanceList, setattendanceList] = useState([])

    useEffect(() => {
        /* global google */
        if (window.google) {
          // Initialize Google One Tap
          google.accounts.id.initialize({
            client_id: CLIENT_ID,
            callback: handleCredentialResponse,
          });
    
          // Show One Tap if user already has Google session
          google.accounts.id.prompt();
    
          function handleCredentialResponse(response) {
            // Decode JWT
            const base64Url = response.credential.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const userData = JSON.parse(window.atob(base64));
            setCurrentUser(userData);
            setIsLoggedin(true);
          }
        } else {
            setIsLoggedin(false);
        }
      }, []);

      useEffect(()=>{
        if(isAdmin) {
            console.log("adminwebsocket")
          const socket = io("wss://check-ip-test-backend.onrender.com");

          socket.emit("joinSession", { sessionId });

          socket.on("attendanceMarked", (data) => {
              console.log("attendance web socket")
            setattendanceList((prev) => [...prev, data]);
          });
        }
        // return () => {
        //   socket.disconnect();
        // };
      }, [isAdmin])

    useEffect(()=>{
        console.log("AttenList ", attendanceList);
    }, [attendanceList]);

    const value = {
        currentUser,
        isLoggedin,
        isAdmin,
        attendanceList,
        setIsAdmin,
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
