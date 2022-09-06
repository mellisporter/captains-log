// Declare Dependencies

const express = require("express");
const app = express();
const port = 3000;

// DATABASE

// MIDDLEWARE

// Index

// New

app.get("/logs/new" , function (req, res){
    res.render("new.ejs");
})

// Delete

// Update

// Create

// Edit

// Show

// Listener

app.listen(port, function(){
    console.log(`Captain, we're listening on ${port}`)
})