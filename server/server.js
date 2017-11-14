const express = require("express");
const app = express();

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req, fine, callback){
        callback(null, './server');
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + '.json');
    }
});
const upload = multer({storage : storage}).single('userFile');

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