const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const handlebars=require('express-handlebars');
const app= express();

//Template engine
app.engine("handlebars",handlebars({defaultLayout:'main'}));
app.set('view engine','handlebars');

//Rotas e templates
app.get("/", function(req,res){
    //res.send("Essa é a página inicial");
    //res.sendFile(__dirname+"/index.html");
    res.render('index');
    //console.log(req.params.id);
});

app.get("/javascript",function(req,res){
    res,sendFile(__dirname+'/js/javascript.js');
});

app.get("/style",function(req,res){
    res.sendFile(__dirname+'/css/style.css');
});

//Indicar server
app.listen(3000);
