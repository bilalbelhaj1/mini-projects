import { createContext, useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
export const UserContext = createContext(null);

const  UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        (
            async () => {
                const storedUser = localStorage.getItem("user")
                if(storedUser) {
                    setUser(JSON.parse(storedUser));
                }
            }
        )()
    }, [])
    function login(user) {
        localStorage.setItem("user", JSON.stringify(user))
        setUser(user);
        navigate('/movies')
    }


    function logout() {
        localStorage.removeItem("user")
        setUser('null')
        navigate('/login')
    }

    return (
    <UserContext
      value={{
        user,
        login,
        logout
      }}
    >
        {children}
    </UserContext>)
}

export default UserProvider;