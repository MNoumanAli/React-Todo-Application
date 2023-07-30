import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import bodyParser from "body-parser";
import router from "./routes/routes.js";

const app = express()

app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use('/' , router)
const CONNECTION_URL = "mongodb+srv://Nouman:Laptop2017@cluster0.htatpax.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.port || 5000;

mongoose.connect(CONNECTION_URL , {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log("Server is Running on PORT :" + PORT )))
    .catch((error) => console.log(error.message));