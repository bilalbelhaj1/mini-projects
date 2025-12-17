import { tablesDB } from "../services/appwriteClient";
import { v4 as uuid } from "uuid";
const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
const TBALE_ID = import.meta.env.VITE_TABLE_ID;
export const saveMovie = async (data) => {
    try {
        const res = await tablesDB.createRow({
            databaseId: DATABASE_ID ,
            tableId: TBALE_ID ,
            rowId: new uuid(),
            data
        })
        return res;
    } catch(err) {
        throw err;
    }
}