//Excluir
var crypto = require('crypto');
const consts = require('../../consts.js');
const jwt = require('jsonwebtoken');    
//Excluir

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
        application.app.controllers.authController.gera_pwd_cripto(application,req,res);
    });    

    application.get('/teste',function(req,res)
    {

        //console.log(req.headers); 
        //console.log("req.headers");         
        //res.send('<html><body>Arquivos BD123</body></html>');
        try {
            //res.send('<html><body>Arquivos BD456</body></html>');
            var token = jwt.sign({ foo: 'bar' }, consts.keyJWT,{expiresIn: consts.expiresJWT});   
            //console.log(token);
            //let token = jwt.sign({_id: user._id}, consts.keyJWT,{expiresIn: consts.expiresJWT}); 
            return res.status(200).json({message: token}); 
        }
        catch(e) {
            //res.send('<html><body>Arquivos BD456</body></html>');
            res.status(500).json({message: 'Erro na execução', error: e});
        }   
        



        //application.app.controllers.authController.gera_token(application,req,res);
    }); 
    

}
 