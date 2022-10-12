import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const { createContext, useState, useContext, useEffect } = require("react");

const AuthContext = createContext("");
export function useAuth() {
    return useContext(AuthContext);
}
export function AuthProvider(props) {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState("");
    
    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }
    const login =  (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }
    const logout = () => {
        auth.signOut();
    }
    const value = {
        currentUser,
        signup,
        login,
        logout,
    }
    useEffect( () => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            console.log('use in auth:', user)
            setCurrentUser(user);
            if(user){
                navigate("/")
            }
        });
        return unsubscribe
    }, [navigate])
    
    return (
        <AuthContext.Provider value={value}>
            { props.children }
        </AuthContext.Provider>
    )
}