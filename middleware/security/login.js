'use strict'

var User=require('../../model/user/');
var jwt=require('jsonwebtoken');

exports.login=function(req,res,next){
    User.get(req.body.email,req.body.password)
        .then(function(user){
            if(!user) return next(); //user not found. authentication failed.

            var token=jwt.sign({userId:user._id,username:user.username},global.secret,{
              expiresInMinutes:1440
            });
            res.json({success:true,token:token});
        })
        .catch(next);
}
