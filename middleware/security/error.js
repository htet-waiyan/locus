'use strict'

exports.failed=function(req,res,next){
  res.json({success:false,message:"Email or password incorrect"});
}
