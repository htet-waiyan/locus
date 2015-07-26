'use strict'

var User=require('../../../model/user/');

exports.recommend=function(req,res,next){
    User.recommend(req.user.userId,req.body.placeId)
        .then(function(result){
            res.json({success:true,message:"Recommended successfully",count:result.recommend});
        })
        .catch(function(err){
            if(err.type && err.type=='bizError'){req.msg=err.message;next();}
            else next(err);
        });
}
