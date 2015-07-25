'use strict'

var Place=require('../../../model/place/');

exports.fetch=function(req,res,next){
    Place.fetch(req.params.lat,req.params.lgt)
         .then(function(place){
            res.json({success:true,place:place});
         })
         .catch(function(err){
              if(err.type && err.type=='bizError'){req.result=err.result; next();} // to handle biz error;
              else next(err); //System Error
         })
}
