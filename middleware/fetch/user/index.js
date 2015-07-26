'use strict'

var User=require('../../../model/user/');

exports.recommended=function(req,res,next){
    User.recommended(req.userId,req.query.placeId)
        .then(function(recommend){
            if(!recommend) res.json({recommended:false});
            else res.json({recommended:true});
        })
        .catch(next);
}
