
import express from "express" 
import cors from "cors"
import hostels from "./hostels.js"

const app = express()
app.use(cors())



app.get('/hostels', (req, res) => {
    return res.json(hostels)
})

app.listen(3001, () => {
    console.log("listening on port: 3001\nhttp://localhost:3001/hostels")
})