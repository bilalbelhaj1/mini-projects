import { account } from "../services/appwriteClient";


export const login = async (email, password) => {
    const response = await account.createEmailPasswordSession({
        email,
        password
    });

    if(!response.ok) {
        throw "Something went wrong could not log you in"
    }
    return response;
}


export const createAccount = async () => {
    const response = await account.create({
        email,
        name,
        password
    })

    if(!response.ok) {
        throw "Something went wrong could not create your account"
    }
}