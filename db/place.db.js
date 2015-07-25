'use strict'

var db=require('./factory.db.js').DBFactory().getInstance();
var Q=require('q');
var ObjectId=require('mongodb').ObjectId;

exports.findByLatLgt=function(lat,lgt){
    var defered=Q.defer();

    db.collection('place',{w:1,strict:true},function(err,col){
        if(err) return defered.reject(err);

        console.log("Finding place at ("+lat+", "+lgt+")");
        console.log(typeof lat);
        //var query={$and:[{"coordinates.lat":lat},{"coordinates.lgt":lgt}]};
        var query={"coordinates.lat":lat,"coordinates.lgt":lgt};
        var option={limit:1};
        col.findOne(query,option,function(err,result){
            if(err) return defered.reject(err);

            console.log(result);
            defered.resolve(result);
        })
    })

    return defered.promise;
}
