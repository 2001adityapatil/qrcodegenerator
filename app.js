const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

var url = "";

app.get("/", function(req, res){
    res.render("index", {url: url});
});

app.post("/", function(req, res){
    const data = req.body.text1;
    url = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl="+data;
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});