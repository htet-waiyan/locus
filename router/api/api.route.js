'use strict'

var express=require('express');
var router=express.Router();

var Place = require('../../middleware/fetch/place/');
var PlaceErr = require('../../middleware/fetch/place/error.js');

var Review = require('../../middleware/submit/review/');

var Authen=require('../../middleware/security/login.js');
var AuthenErr=require('../../middleware/security/error.js');

var Auth=require('../../middleware/security/authorize.js');

var UserRec=require('../../middleware/submit/recommend/recommend.js');
var UserRecErr=require('../../middleware/submit/recommend/error.js');
var User=require('../../middleware/fetch/user/');

var PhotoUpload=require('../../middleware/submit/upload/');

var Common=require('../../middleware/common.js');


router.get('/places/:lat/:lgt',Place.fetch,PlaceErr.failed);
router.get('/image/:name',Common.serveImage);

router.post('/login',Authen.login,AuthenErr.failed);

/** Below api end-points are protected. check token */
router.use(Auth.authorize);
router.post('/review/submit',Review.submit);
router.post('/image/upload',PhotoUpload.upload,PhotoUpload.handle);
router.post('/recommend',UserRec.recommend,UserRecErr.failed);

module.exports=router;
