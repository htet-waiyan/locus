'use strict'

exports.failed=function(req,res,next){
  if(typeof req.result=='string') var msg={success:false,message:req.result};

  res.status(400).json(msg);
}
