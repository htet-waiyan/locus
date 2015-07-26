'use strict'

var bodyParser=require('body-parser');
var path=require('path');

var express=require('express');

module.exports=function(app,config){
  var env=process.env.NODE_ENV;

  app.set('view',config.view);
  app.set('apiVersion',config.api.version);

  global.imgPath=config.imgPath;
  global.secret=config.secret;
  global.context=config.host+":"+config.port;

  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());

  if('development'===env||'test'===env){
    //configuration for development/test environment
  }

  if('production'===env){
    //configuration for production environment
  }
}
