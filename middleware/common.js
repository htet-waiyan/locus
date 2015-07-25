'use strict';

var path=require('path');
var fs=require('fs');

exports.serveImage=function(req,res,next){
  res.sendFile(req.params.name,{root:global.imgPath});
}
