'use strict'

var instance;

exports.setDBInstance=function(db){
  instance=instance||db;
}

exports.DBFactory=function(){
  return{
    getInstance:function(){
      if(!instance)
        throw new Error("DB Instance hasn't been instantiated");

      return instance;
    }
  }
}
