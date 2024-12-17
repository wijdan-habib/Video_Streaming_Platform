import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })
import connectDB from "./db/index.js";
connectDB()






























// import mongoose from 'mongoose';
// import { DB_NAME } from './constants.js';
// import express from 'express';

// const app = express()
// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("ERROR", (err)=>{
//             console.error("error",err)
//             throw err
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`APP is listening on PORT :${process.env.PORT}` )
//         })
//     } catch (error) {
//         console.error("ERROR :", error)
//         throw error
//     }
// })()
