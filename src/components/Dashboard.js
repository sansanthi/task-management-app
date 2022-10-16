import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import "../scss/pages/Dashboard.scss";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";


export default function Dashboard() {
    const [error, setError] = useState("");
    const { logout } = useAuth();
    const navigate = useNavigate();

    const [sidebar, setSidebar] = useState(true);

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
   const toggleSidebar = () => {
        setSidebar(prevValue => !prevValue);
   }
    return (
      <div className="dashboard">
        <Sidebar toggleSidebar={toggleSidebar} sidebar={sidebar}/>
        <Header  sidebar={sidebar}/>
        <Content sidebar={sidebar} toggleSidebar={toggleSidebar}/>
        {/* {error && <p>{error}</p>}
            <button onClick={handleLogout}>Logout</button> */}
      </div>
    );
}