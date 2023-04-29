const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.use(express.static("public"));

var items=[];

app.get("/", function (req,res) {
    var now = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'}
    let temp = now.toLocaleDateString("en-US", options);
    res.render("list",{day: temp, additem: items});
})

app.post("/",function (req,res) {
    var item = req.body.newitem;
    items.push(item);
    res.redirect("/");
})

app.listen(3000, function () {
    console.log("server running started listening");
})