import express from "express"
import cors from "cors"
import { connect } from "./db/connect.js"
import jwt from 'jsonwebtoken'

const SECRET = process.env.SECRET

const app = express()
app.use(express.json())
app.use(cors())
const db = await connect()


app.post("/api/complaints", async (req, res) => {
    const { category, message } = req.body
    console.log(category, message);
    const insert = await db.collection("messages").insertOne({ "category": category, "message": message, createdAt: new Date().toLocaleString() })
    console.log(insert);
    res.json({ message: "התלונה נשלחה בהצלחה" })
})

app.post("/api/admin/login", (req, res) => {
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
    if (JSON.parse(req.headers.password) == ADMIN_PASSWORD) {
        const token = jwt.sign({}, SECRET, { expiresIn: "1h" })
        return res.status(200).json({ token })
    } else {
        res.status(401).json({ message: "fdssfdg" })
    }
})

app.get("/api/complaints", async (req, res) => {
    
    const data = await db.collection("messages").find({}).toArray()
    console.log(data);
    res.json({ data })
})


app.listen(8000, () => {
    console.log("server run ...");
})