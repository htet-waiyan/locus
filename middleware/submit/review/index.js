'use strict'

var Review=require('../../../model/review/');

exports.submit=function(req,res,next){
    Review.submit(req.body.placeId,req.body.comment,req.body.reviewer)
          .then(function(result){
              res.json({success:true,reviews:result.reviews});
          })
          .catch(next);
}

exports.fetch=function(req,res,next){
    Review.submit(req.query.placeId)
          .then(function(result){
              res.json(result.reviews);
          })
          .catch(next);
}
