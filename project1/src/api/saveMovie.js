import { tablesDB } from "../services/appwriteClient";
import { ID } from "appwrite";
import { Query } from "appwrite";
const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
const TBALE_ID = import.meta.env.VITE_TABLE_ID;
export const saveMovie = async (data) => {
    try {
        const res = await tablesDB.createRow({
            databaseId: DATABASE_ID ,
            tableId: TBALE_ID ,
            rowId: ID.unique(),
            data
        })
        return res;
    } catch(err) {
        throw err;
    }
}

export const unsaveMovie = async (userId, movieId) => {
    try {
        const rows = await tablesDB.listRows({
            databaseId: DATABASE_ID,
            tableId: TBALE_ID,
            queries: [
                Query.equal("userId", userId),
                Query.equal("movie_id", movieId)
            ]
        })
        console.log(rows.rows);

        for (const row of rows.rows) {
            const res = await tablesDB.deleteRow({
                databaseId:DATABASE_ID,
                tableId: TBALE_ID,
                rowId: row.$id
            })
            console.log(res);
        }
    } catch(err) {
        console.log(err);
        throw err;
    }
}