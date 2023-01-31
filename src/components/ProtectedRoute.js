import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export function ProtectedRoute({children}) {
    const { currentUser, loading } = useContext(AuthContext);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!currentUser) {
        return <Navigate to="/signin" />;
    }
    
    return <>{children}</>;

}