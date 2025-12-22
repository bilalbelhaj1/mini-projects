import { tablesDB } from "../services/appwriteClient";
import { Query } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
const TBALE_ID = import.meta.env.VITE_TABLE_ID;

export const getSavedMovies = async (userId) => {
    try {
        const data = await tablesDB.listRows({
            databaseId:DATABASE_ID,
            tableId:TBALE_ID,
            queries: [
                Query.equal('userId', userId),
            ]
        })
        console.log(data);
        return data;
    } catch(err) {
        console.log(err)
        throw err;
    }
}