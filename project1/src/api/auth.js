import { account } from "../services/appwriteClient";


export const login = async (email, password) => {
    const response = await account.createEmailPasswordSession({
        email,
        password
    });
    return response;
}


export const createAccount = async (id, username, email, password) => {
    const response = await account.create({
        id,
        email,
        name: username,
        password
    })

    return response;
}