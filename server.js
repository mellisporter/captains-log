// Declare Dependencies

const express = require("express");
const app = express();
const port = 3000;
require('dotenv').config();


const mongoose = require('mongoose');

const Log = require('./models/logs');


// DATABASE

// MIDDLEWARE

// Database Connection process.env is how we acess the variable from the env file
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));



// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Index

app.get("/logs" , function (req, res){
    Log.find({}, (error, allLogs) => {
		res.render('index.ejs', {
			logs: allLogs,
		});
	});
})

// New

app.get("/logs/new" , function (req, res){
    res.render("new.ejs");
})

// Delete

// Update

// Create

app.post("/logs" , function (req, res){
    // res.send('received')
    if (req.body.shipIsBroken === 'on') {
		//if checked, req.body.completed is set to 'on'
		req.body.shipIsBroken = true;
	} else {
		//if not checked, req.body.completed is undefined
		req.body.shipIsBroken = false;
	}

    Log.create(req.body, (error, createdLog) => {
        // res.send(createdLog);
        res.redirect('/logs');        
    });

})

// Edit

// Show

// Listener

app.listen(port, function(){
    console.log(`Captain, we're listening on ${port}`)
})