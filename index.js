import express from 'express';
import mongoose from "mongoose";
import Router from "./Router.js";
import cors from "cors"

const PORT = process.env.PORT || 3000;
const DB_URL = `mongodb+srv://utkamag:Hesoyam1973@cluster0.ymhhgli.mongodb.net/?retryWrites=true&w=majority`


const options = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

const app = express()
app.use(cors(options))
app.use(express.json())
app.use("/", Router)



async function startApp () {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log("Sever worked on port" + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()



