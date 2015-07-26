'use strict'

var db=require('./factory.db.js').DBFactory().getInstance();
var Q=require('q');
var ObjectId=require('mongodb').ObjectId;

exports.findByCredentials=function(email,password){
    var defered=Q.defer();

    db.collection('user',{w:1,strict:true},function(err,col){
        if(err) return defered.reject(err);

        console.log("Searching user ["+email+", "+password+"]");
        var query={"credentials.email":email,"credentials.password":password};
        var option={limit:1};
        col.findOne(query,option,function(err,result){
            if(err) return defered.reject(err);

            console.log(result);
            defered.resolve(result);
        })
    })

    return defered.promise;
}

exports.addRecommendedPlace=function(userId,recommend){
    var defered=Q.defer();

    db.collection('user',{w:1,strict:true},function(err,col){
        if(err) return defered.reject(err);

        try{
          var query={"_id":new ObjectId(userId)};
        }catch(err){return defered.reject(err);}

        var update={$push:{"recommends":recommend}};
        var option={
          projection:{"recommends":1},
          upsert:true,
          returnOriginal:false
        }
        col.findOneAndUpdate(query,update,option,function(err,result){
            if(err) return defered.reject(err);

            console.log(result.value);
            defered.resolve(result.value);
        })
    })

    return defered.promise;
}

exports.getRecommend=function(userId,placeId){
    var defered=Q.defer();

    db.collection('user',{w:1,strict:true},function(err,col){
        if(err) return defered.reject(err);

        console.log("Searching for recommends by "+userId);
        console.log("Searching for recommends for this place : "+placeId);
        try{
            var query={"_id":new ObjectId(userId),"recommends.placeId":placeId};
        }catch(err){return defered.reject(err);}
        var option={limit:1,fields:{"recommends":1}};
        col.findOne(query,option,function(err,result){
            if(err) return defered.reject(err);

            console.log(result);
            defered.resolve(result);
        })
    })

    return defered.promise;
}





