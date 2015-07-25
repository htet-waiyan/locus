'use strict'

var PlaceDB=require('../../db/place.db.js');
var GdlError=require('../../util/factory.js').GdlError;
var Q=require('q');

exports.fetch=function(lat,lgt){
    var defered=Q.defer();

    var lat=parseFloat(lat);var lgt=parseFloat(lgt);
    PlaceDB.findByLatLgt(lat,lgt)
           .then(function(place){
              if(!place) defered.reject(GdlError('bizError','Place not found ('+lat+', '+lgt+')')); // no place found.
              else defered.resolve(place);
           })
           .catch(defered.reject)

    return defered.promise;
}
