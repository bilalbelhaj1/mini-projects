import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { useNavigate } from "@tanstack/react-router";
export const requireAuth = async () => {
    const { isAuthenticated } = useContext(UserContext);
    const navigate = useNavigate();
    if (!isAuthenticated) {
        return navigate({
            to:"/login"
        })
    }
}