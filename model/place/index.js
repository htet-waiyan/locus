'use strict'

var PlaceDB=require('../../db/place.db.js');
var GdlError=require('../../util/factory.js').GdlError;
var Q=require('q');
var path=require('path');

exports.fetch=function(lat,lgt){
    var defered=Q.defer();

    PlaceDB.findByLatLgt(lat,lgt)
           .then(function(place){
              if(!place) defered.reject(GdlError('bizError','Place not found ('+lat+', '+lgt+')')); // no place found.
              else defered.resolve(place);
           })
           .catch(defered.reject)

    return defered.promise;
}

exports.uploadPhoto=function(placeId,file){
    var imgUrl=path.join(global.context,'/api/v1/images/'+file.filename);
    return PlaceDB.addImage(placeId,imgUrl)
}
