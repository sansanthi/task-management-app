import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuth } from "./auth";

export const RequiredAuth = (props) => {

  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // console.log('use in auth:', user)
      // setCurrentUser(user);
      if (user) {
        navigate("/");
      }
    });
    return unsubscribe;
  }, [navigate]);
  const { currentUser } = useAuth();
  console.log("user in required auth:", currentUser);

//   if (!currentUser) {
//     return <Navigate to="/login" />;
//   }
  

  console.log("children:", props.children);
  return props.children;
};
