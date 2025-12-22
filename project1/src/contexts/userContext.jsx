import { createContext, useEffect, useState } from "react";export const UserContext = createContext(null);
import { account } from "../services/appwriteClient";
const  UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        (
            async () => {
                const storedUser = localStorage.getItem("user")
                if(storedUser) {
                    setUser(JSON.parse(storedUser));
                    setLoading(false);
                } else {
                    try {
                        const currentUser = await account.get();
                        const user = { userId: currentUser.$id, username: currentUser.name };
                        localStorage.setItem("user", JSON.stringify(user))
                        setUser(user);
                    } catch (err) {
                        console.log(err);
                    } finally {
                        setLoading(false)
                    }
                }
            }
        )()
    }, [])
    async function logout() {
        localStorage.removeItem("user")
        await account.deleteSession("current");
        setUser(null)
    }

    return (
    <UserContext
      value={{
        user,
        logout,
        isAuthenticated: user ? true : false
      }}
    >
        {loading ? <h1>Authenticating...</h1> : children}
    </UserContext>)
}

export default UserProvider;