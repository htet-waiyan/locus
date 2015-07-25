'use strict'

var ReviewDB=require('../../db/review.db.js');
var GdlError=require('../../util/factory.js').GdlError;
var Review=require('../../util/factory.js').Review;
var DateUtil=require('../../util/date.js');
var Q=require('q');

exports.submit=function(placeId,comment,reviewer){
    var review=Review(comment,reviewer,DateUtil.today('YYYY/MM/DD HH:mm:ss'));

    return ReviewDB.addReview(placeId,review);
}

exports.fetch=function(placeId){
    return ReviewDB.fetch(placeId);
}
