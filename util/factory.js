'use strict'

exports.GdlError=function(type,message,data){
  var error=new Error(message);
  error.type=type;
  error.result=data||message||undefined;

  return error;
}

exports.Review=function(comment,reviewBy,datetime){
  return{
    comment:comment,
    reviewBy:reviewBy,
    datetime:datetime
  }
}
