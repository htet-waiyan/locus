'use strict'

var moment=require('moment');
exports.today=function(format){
  return moment().format(format);
}
