var express = require("express");
var app = express();
var mongoose=require("mongoose");

mongoose.connect("mongodb://admin:admin@ds123050.mlab.com:23050/meeta");

app.set("view engine","ejs");
const PORT = process.env.PORT||3000;

var dogSchema = new mongoose.Schema({
	name:String,
	breed:String

});

var Dog = mongoose.model("Dog",dogSchema);


app.get("/",function(req,res){
	res.sendfile("./public/Admr.html");
})


app.get("/dogs",function(req,res){
		Dog.find({},function(err,dogs){
			res.render("main",{dogs:dogs});

		});
});

app.get("/dogs/new",function(req,res){
	res.render("new");
})

app.post("/dogs",function(req,res){
	Dogs.create()
})






app.listen(PORT,()=>{
	console.log("i am diken");
})

