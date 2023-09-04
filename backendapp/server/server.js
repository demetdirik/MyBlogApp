import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from 'body-parser';

import xss from 'xss-clean';
//import mongoSanitize from "mongo-sanitize";
import mongoSanitize from 'express-mongo-sanitize';
import dbConnection from "./dbConfig/dbConnection.js";



import userRoutes from "./routes/userRoutes.js";



dotenv.config();
const app = express ();
const PORT = process.env.PORT || 5000;

//MONGODB CONNECTİON

dbConnection();



//middlenames 
app.use(cors());
app.use(xss());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.use("/api/users" , userRoutes);


app.use(mongoSanitize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));






