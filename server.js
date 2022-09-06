// Declare Dependencies

const express = require("express");
const app = express();
const port = 3000;

// Listener

app.listen(port, function(){
    console.log(`Captain, we're listening on ${port}`)
})