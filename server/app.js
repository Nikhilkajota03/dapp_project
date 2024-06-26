import express from "express";
import { ethers } from "ethers";
import messageRoute from "./Routes/routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/v1', messageRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


//C:\Users\nikhi\OneDrive\Desktop\gitt\test_app\hospital_psql\server\controller\controller.js