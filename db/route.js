'use strict'

module.exports=function(app){
  /** API middleware mounted here */
  app.use('/api/'+app.get('apiVersion'),require('./api/api.route.js'));

  /** Error handling middleware */
  app.use(function(err,req,res,next){
    console.log("Internal Server Error");
    console.log(err.stack);

    res.status(500).end(JSON.stringify({msg:"500 Internal Server Error"}));
  })
}
