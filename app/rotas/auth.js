  
module.exports=function(application){
 
   // application.get('/auth_cript',function(req,res)
   // {
   //     application.app.controllers.authController.criptografa(application,req,res);
   // });

    application.get('/auth_jwt',function(req,res)
    {

        //console.log(req.headers); 
        //console.log("req.headers");         
        res.send('<html><body>Arquivos BD</body></html>');
        //application.app.controllers.authController.gera_token(application,req,res);
    });    

    application.post('/auth_cript',function(req,res)
    {
        //console.log(req.headers); 
       // console.log("req.headers"); 
        res.send('<html><body>Arquivos BD</body></html>');
        //application.app.controllers.authController.gera_pwd_cripto(application,req,res);
    });    
    

}
 