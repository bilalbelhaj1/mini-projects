import { account } from "../services/appwriteClient";


export const login = async (email, password) => {
    const response = await account.createEmailPasswordSession({
        email,
        password
    });
    return response;
}


export const createAccount = async () => {
    const response = await account.create({
        email,
        name,
        password
    })

    return response;
}