  
module.exports=function(application){
 
    application.get('/auth',function(res,req)
    {
        application.app.controllers.authController.criptografa(application,res,req);
    });

}
 