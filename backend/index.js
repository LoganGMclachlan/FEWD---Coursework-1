const express = require("express")
const cors = require("cors")
const fs = require("fs")

const app = express()   
app.use(cors())

let hostels = []

fs.readFile("./hostels.json", (error,data) => {
    if(error){
        // checks for errors
        console.error(error)
        throw err
    }
    
    hostels = JSON.parse(data)
})

app.get('/hostels', (req,res) => {
    return res.json(hostels)
})

app.listen(3001, () => {
    console.log("listening on port: 3001\nhttp://localhost:3001/hostels")
})