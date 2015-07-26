'use strict'

var jwt=require('jsonwebtoken');

exports.authorize=function(req,res,next){
    var token=req.body.token||req.query.token||req.headers['x-access'];

    if(!token) return res.json({success:false,message:"Token not provided"});

    jwt.verify(token,global.secret,function(err,user){
        if(err) return res.json({success:false,message:"Invalid token"});

        req.user=user;
        next();
    })
}
