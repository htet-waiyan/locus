'use strict'

/** storage engine for multer */
exports.diskStorage=function(multer){
  var self=this;
  var diskStorage=multer.diskStorage({
    destination:function(req,file,cb){
      cb(null,'/golden-land/images')
    },
    filename:function(req,file,cb){
      var ext=file.originalname.substring(file.originalname.lastIndexOf('.'));
      cb(null,self.filename(5)+ext);
    }
  });

  return diskStorage;
}

/** http://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript */
exports.filename=function(length){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
