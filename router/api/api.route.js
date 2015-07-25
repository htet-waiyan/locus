'use strict'

var express=require('express');
var router=express.Router();

var Place = require('../../middleware/fetch/place/');
var PlaceErr = require('../../middleware/fetch/place/error.js');

var Review = require('../../middleware/submit/review/');

var Common=require('../../middleware/common.js');

router.get('/places/:lat/:lgt',Place.fetch,PlaceErr.failed);
router.get('/image/:name',Common.serveImage);

router.post('/review/submit',Review.submit);
router.get('/reviews',Review.fetch);

module.exports=router;
