'use strict'

var db=require('./factory.db.js').DBFactory().getInstance();
var Q=require('q');
var ObjectId=require('mongodb').ObjectId;

exports.addReview=function(placeId,review){
    var defered=Q.defer();

    db.collection('place',{w:1,strict:true},function(err,col){
        if(err) return defered.reject(err);

        try{
          var query={"_id":new ObjectId(placeId)};
        }catch(err){return defered.reject(err);}

        var update={$push:{"reviews":review}};
        var options={
          projection:{"reviews":1},
          upsert:true,
          returnOriginal:false
        }
        col.findOneAndUpdate(query,update,options,function(err,result){
          if(err) return defered.reject(err);

            console.log(result.value);
            defered.resolve(result.value);
        })
    })

    return defered.promise;
}

exports.fetch=function(placeId){
    var defered=Q.defer();

    db.collection('place',{w:1,strict:true},function(err,col){
        if(err) return defered.reject(err);

        col.find({"_id":new ObjectId(placeId)},{"reviews":1,"_id":0})
           .toArray(function(err,docs){
              if(err) return defered.reject(err);

              defered.resolve(docs);
           })
    })

    return defered.promise;
}
