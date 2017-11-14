const express = require("express");
const app = express();

const multer = require("multer");
const upload = multer({dest:'uploads/'}).single('userFile');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    upload(req, res, function(err) {
        if(err){
            return res.end("Error uploading file");
        }
        res.end("File uploaded");
    })
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});