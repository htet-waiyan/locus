var express=require('express');
var http=require('http');
var MongoClient=require('mongodb').MongoClient;

var app=express();
var config=require('./config/environment/');

require('./config/express')(app,config);

MongoClient.connect(config.mongo.uri,config.mongo.options,function(error,db){
  if(error)
    throw error;

  require('./db/factory.db.js').setDBInstance(db);
  require('./router/route.js')(app);

  // Server starts only after db instance is ready
  http.createServer(app)
    .listen(config.port,function(){
      console.log("==============================");
      console.log("Server started at "+config.port);
      console.log("-------------------------------");
      console.log("Environment = "+config.env);
      console.log("Server ip = "+config.ip);
      console.log("Server port = "+config.port);
      console.log("==============================");
    })
});
