import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({ path: '../.env' })


connectDB()
.then(()=>{
    app.listen(process.env.PORT||4000,()=>{
        console.log(`port runing successfully on ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("error with connecting MONGODB!!!", err)
})




























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
