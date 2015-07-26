/**
 *  Common config options defined here
 */
'use strict'
var path = require('path');
var _ = require('lodash');

process.env.NODE_ENV=process.env.NODE_ENV||'development';

// Common configuration
var all={
  env:process.env.NODE_ENV,
  root:path.normalize(__dirname+"/../.."),
  port:process.env.PORT||3000,
  host:process.env.HOSTNAME||'localhost',
  mongo:{
    options:{
      uri_decode_auth:true
    }
  },
  api:{
    version:'v1'
  },
  secret:'gdl-jsonwebtoken',
  imgPath:'/golden-land/images'
}

/**
 *  Expose config merged with environment specific config
 */
module.exports=_.merge(
  all,require('./'+process.env.NODE_ENV+'.js')||{}
);
