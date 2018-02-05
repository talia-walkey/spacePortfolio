const express = require("express");
const app = express();

//ask heroku to find the public port for use
const port = process.env.PORT || 3000;

app.get("/", (req, resp)=>{
    resp.end("Hi, welcome to my heroku app");
})

app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    
    console.log("Port is running");
})