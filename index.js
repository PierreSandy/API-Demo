//  This code is a demo on setting up and using an API with Node Js 


// Sets API Server Up
const express = require('express')
const server = express()

// Set server to listen to localhost location
server.listen('8888', function () {
    
    // terminal message when connected
    console.log('API is Ready!')

})


// endpoint to server location in browser path (/)//
server.get('/say-hi/:name', function(req,res) {

    // variable path to add personal name to webpage//
    const name  = req.params.name;

    // function used to calll name function in browser path//
    return res.send(`Hi! ${name}!`)
})

