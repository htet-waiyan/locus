'use strict'

var UserDB=require('../../db/user.db.js');
var PlaceDB=require('../../db/place.db.js');
var GdlError=require('../../util/factory.js').GdlError;
var DateUtil=require('../../util/date.js');
var Q=require('q');

exports.get=function(email,password){
    return UserDB.findByCredentials(email,password);
}

var checkRecommend=function(userId,placeId){
  var defered=Q.defer();

  UserDB.getRecommend(userId,placeId)
        .then(function(recommend){
            if(recommend) return defered.reject(GdlError('bizError','You have recommeded this place already.'));
            defered.resolve();
        })
        .catch(defered.reject);

  return defered.promise;
}

exports.recommend=function(userId,placeId){
  var defered=Q.defer();

  checkRecommend(userId,placeId)
      .then(function(){
          console.log("UserDB.addRecommendedPlace");
          return UserDB.addRecommendedPlace(userId,{placeId:placeId,datetime:DateUtil.today('YYYY/MM/DD HH:mm:ss')});
      })
      .then(function(recommends){
          return [recommends,PlaceDB.incrRecommend(placeId)];
      })
      .spread(function(recommends,count){
          console.log(count);
          defered.resolve(count);
      })
      .catch(defered.reject);

  /*Q.all([userRecommend,incrementCount])
   .spread(function(recommend,count){ //recommend resolved by userRecommend, count resolved by incrementCount

   })
   .catch(defered.reject);*/

   return defered.promise;
}

exports.recommended=function(userId,placeId){
    return UserDB.getRecommends(userId,placeId);
}
