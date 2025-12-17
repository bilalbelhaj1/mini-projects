import { Client, Account, TablesDB} from "appwrite";
const ENDPOINT_URL = import.meta.env.VITE_API_ENDPOIN;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;

const client = new Client();
client.setEndpoint(ENDPOINT_URL);
client.setProject(PROJECT_ID);

export const account = new Account(client);

export const tablesDB = new TablesDB(client);
