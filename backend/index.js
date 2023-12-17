const express = require("express")
const cors = require("cors")
const fs = require("fs")
const bodyParser = require('body-parser')

const app = express()   
app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 3000;
let hostels = []

function getHostels(){
    fs.readFile("./hostels.json", (error,data) => {
        if(error){
            // checks for errors
            console.error(error)
            throw err
        }
        
        hostels = JSON.parse(data)
    })
}

app.get('/hostels', (req,res) => {
    getHostels()
    return res.json(hostels)
})

app.post('/newReview', (req,res) => {
    const body = req.body

    try{
        // reads json file
        const json = fs.readFileSync("./hostels.json")
        let data = JSON.parse(json)

        data.map(hostel => {
            if (hostel.id === body.target){
                // finds target hostel and adds new review and rating
                hostel.reviews.push(body.review)
                hostel.ratings.push(body.rating)
            }
            return hostel
        }) 

        // writes updated data to file
        fs.writeFileSync("./hostels.json",JSON.stringify(data))
    }
    catch(err){ console.error(err) }
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}/hostels`)
})