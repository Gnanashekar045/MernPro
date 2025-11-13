import express from 'express'
import dotenv from 'dotenv'

const app = express()

dotenv.config()

app.get("/", (req, res)=> {
    res.send("Server is ready")
})

console.log(process.env.MONG_URI)

app.listen(5000, ()=> {
    console.log("Server started at http//localhost:5000")
})

//keNxKAyXwFTGmxmO

//mongodb+srv://shekark509_db_user:keNxKAyXwFTGmxmO@tesk1.6cuqbpc.mongodb.net/?appName=tesk1