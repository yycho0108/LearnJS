/**
 * Created by jamiecho on 1/3/16.
 */
var express = require('express');
var fs = require('fs');
var app = express();

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

//mongodb
var db = require('./db');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
   res.end('HELLO');
});


app.get('/rm',function(req,res){
   fs.readFile('test.html',function(err,data){
       if(err){
           //window.alert("ERROR");
       }else{
           res.setHeader('Content-Type', 'text/html');
           res.setHeader('Access-Control-Allow-Origin','*');
           res.writeHead(200);
           res.end(data);
       }
   });
});
app.get('/jquery',function(req,res){
    fs.readFile('jquery-1.11.3.js',function(err,data){
        if(err){

        }else{
            res.setHeader('Content-Type','text/javascript');
            res.writeHead(200);
            res.end(data);
        }
    })
});
app.get('/memory',function(req,res){
    fs.readFile('memory.html',function(err,data){
        if(err){

        }else{
            res.setHeader("Content-Type","text/html");
            res.writeHead(200);
            res.end(data);
        }
    })
});
app.post('/memory',function(req,res){
    db.save(req.body);
    fs.readFile('memory.html',function(err,data){
        if(err){

        }else{
            res.setHeader("Content-Type","text/html");
            res.writeHead(200);
            res.end(data);
        }
    });
});

app.delete('/cat',function(req,res){
        var text = '';
        req.on("data",function(data){
            text += data;
        });
        req.on("end",function(){
            res.end(text);
        })
});

app.listen(8000);