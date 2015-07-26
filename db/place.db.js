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

exports.incrRecommend=function(placeId){
    var defered=Q.defer();

    db.collection('place',{w:1,strict:true},function(err,col){
        if(err) return defered.reject(err);

        try{
            var query={"_id":new ObjectId(placeId)};
        }catch(err){return defered.reject(err);}
        var update={$inc:{"recommend":1}};
        var options={
            projection:{"recommend":1},
            upsert:false,
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

exports.addImage=function(placeId,imgUrl){
        var defered=Q.defer();

        db.collection('place',{w:1,strict:true},function(err,col){
            if(err) return defered.reject(err);

            try{
                var query={"_id":new ObjectId(placeId)};
            }catch(err){return defered.reject(err);}
            var update={$push:{"images":imgUrl}};
            var options={
                projection:{"images":1},
                upsert:true,
                returnOriginal:false
            }

            col.findOneAndUpdate(query,update,options,function(err,result){
                if(err) return defered.reject(err);

                defered.resolve(result.value);
            })
        })

        return defered.promise;
}
