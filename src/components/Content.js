import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import iconShow from "../assets/icon-show-sidebar.svg";
export default function Content({sidebar, toggleSidebar}) {
    const [error, setError] = useState("");
  const [noTask, setNoTask] = useState(true);
  const { logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = async() => {
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
      <button className="show-sidebar" onClick={toggleSidebar}><img src={iconShow} alt="" /></button>
      <div className={sidebar ? "content-box content-sidebar": "content-box full-page"}>
        {noTask && (
          <div className="empty-condition">
            <p>This board is empty. Create a new column to get started.</p>
            <button className="task-add-btn btn--purple">Add New Column</button>
          </div>
        )}
        { error && <p>{error}</p>}
        <button onClick={handleLogout}>Logout</button> 
      </div>
    </>
  );
}
