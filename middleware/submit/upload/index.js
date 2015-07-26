'use strict'

var multer=require('multer');
var Fileupload=require('../../../util/fileupload.js');
var upload=multer({storage:Fileupload.diskStorage(multer)});
var Place=require('../../../model/place');

exports.upload=upload.single('image');
exports.handle=function(req,res,next){
  if(!req.file)
    return res.json({success:false,message:"Uploaded image missing."});

  console.log(req.file);
  Place.uploadPhoto(req.body.placeId,req.file)
       .then(function(images){
          res.json({success:true,image:images});
       })
       .catch(next);
}
