'use strict'

exports.failed=function(req,res,next){
  res.status(400).json({success:false,message:req.msg});
}
