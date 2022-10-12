import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

export default function Dashboard() {
    const [error, setError] = useState("");
    const { logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = async() => {
        setError("")
        try {
            await logout()
            console.log(await logout())
            navigate("/login")
        } catch {
            setError("Failed to logout")
        }
    }
    return (
        <>
            <h1 style={ {color: 'white'} }>Dashboard</h1>
            {error && <p>{error}</p>}
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}