import { createContext, useEffect, useState } from "react";export const UserContext = createContext(null);
import { account } from "../services/appwriteClient";
const  UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
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
    }


    async function logout() {
        localStorage.removeItem("user")
        await account.deleteSession("current");
        setUser('null')
    }

    return (
    <UserContext
      value={{
        user,
        login,
        logout,
        isAuthenticated: user ? true : false
      }}
    >
        {children}
    </UserContext>)
}

export default UserProvider;