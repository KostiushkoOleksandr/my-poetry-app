import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: "poetry-fb96b", // Використай частину з URL бази даних
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
