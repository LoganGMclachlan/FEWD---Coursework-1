var express = require('express');
var router = express.Router();
let hostels = require('../hostels')

// Hostels API version 1.0

var itineraries = [
    {
        "user": "Alice",
        "startdate" : new Date(2022, 5, 24),
        "stages": [
            {"stage":1, "hostel":1, "nights": 2}
        ]
    }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// ENDPOINTS

/* GET all details of all hostels */
router.get('/hostels', function(req, res) { 
    hostels.length==0 ? res.status(404): res.status(200);
    res.send(hostels);
})
  
/* GET hostel by id */
router.get('/hostels/:id', function(req, res) { 
    var selectedhostels = hostels.filter(function(hostel) {
      return hostel.id == req.params["id"];
    });
    selectedhostels.length==0 ? res.status(404): res.status(200);
    res.send(selectedhostels);
})

/* GET hostels with cafe */
router.get('/hostels/cafe/:term', function(req, res) { 
    var selectedhostels = hostels.filter(function(hostel) {
        return String(hostel.cafe) == req.params["term"];
    });
    selectedhostels.length==0 ? res.status(404): res.status(200);
    res.send(selectedhostels);
})

/* GET hostels by search term in address  */
router.get('/hostels/search/:term', function(req, res) { 
  var selectedhostels = hostels.filter(function(hostel) {
    var result = (hostel.address.toLowerCase().search(req.params["term"].toLowerCase())>=0) || 
        (hostel.description.toLowerCase().search(req.params["term"].toLowerCase())>=0);
    return result;
  });
  selectedhostels.length==0 ? res.status(404): res.status(200);
  res.send(selectedhostels);
})


/* GET add rating for hostel by id */
router.get('/hostels/rate/:id/:rating', function(req, res) { 
  var id = req.params["id"];
  var rating = Number(req.params["rating"]);
  var hostel = hostels.find(x => x.id == id);
  hostel.ratings.push(rating);
  res.status(202);
  res.send(hostel);
})

/* POST new review for hostel by id */
/* body should be of the form {"reviewer":"anon", "review":"Great hostel"}  */
router.post('/hostels/review/:id', function(req, res) { 
  var id = req.params["id"];
  var hostel = hostels.find(x => x.id == id);
  var newreview = req.body;
  hostel.reviews.push(newreview);     
  res.status(202);
  res.send(hostel);
})

/* GET all itineraries */
router.get('/itineraries', function(req, res) { 
    itineraries.length==0 ? res.status(404): res.status(200);
    res.send(itineraries);
  })

/* GET itinerary for user */
router.get('/itineraries/:user', function(req, res) { 
  var selecteditinerary = itineraries.filter(function(it) {
    return it.user == req.params["user"];
  });
  selecteditinerary.length==0 ? res.status(404): res.status(200);
  res.send(selecteditinerary);
})

/* GET create new itinerary for user */
router.get('/itineraries/new/:user', function(req, res) { 
    
    var user = req.params["user"]
    var startdate = new Date();
    var newitinerary = {"user": user, "startdate" : new Date(), "stages": []}
    itineraries.push({"user": user, "startdate" : new Date(), "stages": []});
    res.status(202);
    res.send(newitinerary);
})

/* GET set start date */
/* :date param should be of the form "2022-02-10T00:00:00.000Z" */
router.get('/itineraries/startdate/:user/:date', function(req, res) {  
    var user = req.params["user"];
    var startdate = new Date(req.params["date"]);
    var itinerary = itineraries.find(x => x.user == user);
    if(itinerary) {
        itinerary.startdate = startdate;
        res.status(202);
    } else {res.status(404);}
    res.send(itinerary);
})


/* POST new itinerary stage */
/* body should be of the form {"hostel":1, "nights":2} */
/* doesn't check for valid hostel id */
router.post('/itineraries/stages/new/:user', function(req, res) { 
    var user = req.params["user"];
    var itinerary = itineraries.find(x => x.user == user);
    if(itinerary) {
        nextstagenumber = itinerary.stages.length + 1;
        var newstage = req.body;
        newstage.stage = nextstagenumber;
        itinerary.stages.push(newstage);     
        res.status(202);
    } else {res.status(404);}
    res.send(itinerary);
})

/* POST update itinerary stage */
/* body should be of the form {"hostel":1, "nights":2} */
/* doesn't check for valid hostel id */
router.post('/itineraries/stages/update/:user/:stage', function(req, res) { 
    stagenumber = req.params["stage"];
    var user = req.params["user"];
    var itinerary = itineraries.find(x => x.user == user);
    if(itinerary) {
        if(stagenumber<=itinerary.stages.length){
            var newstage = req.body;
            newstage.stage = stagenumber;
            itinerary.stages[stagenumber-1]= newstage;    
        } 
        res.status(202);
    } else {res.status(404);}
    res.send(itinerary);
})

// added for testing
router.get('/itineraries/stages/delete/:user/:stage', function(req, res) { 
    stagenumber = req.params["stage"];
    var user = req.params["user"];
    var itinerary = itineraries.find(x => x.user == user);
    if(itinerary) {
        if(stagenumber<=itinerary.stages.length){
            itinerary.stages.splice(stagenumber,1);  
        } 
        res.status(202);
    } else {res.status(404);}
    res.send(itinerary);
})

module.exports = router;
