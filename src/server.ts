import dotenv from "dotenv";
dotenv.config();

import startUp from "./startUp";
const PORT = process.env.PORT || 3001;

startUp.app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});