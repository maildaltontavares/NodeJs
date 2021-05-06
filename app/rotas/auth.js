//Excluir
var crypto = require('crypto');
const consts = require('../../consts.js');
const jwt = require('jsonwebtoken');    
//const app = require('../../config/server.js');
//Excluir

module.exports=function(application){ 
 

    application.get('/auth_jwt',function(req,res)
    {  
        //console.log(req.headers);  
        application.app.controllers.authController.gera_token(application,req,res);
    });    

    application.post('/auth_cript',function(req,res)
    { 
        application.app.controllers.authController.gera_pwd_cripto(application,req,res);
    });    

    application.get('/testeJWT',function(req,res)
    {
         
        try {
 
            var token = jwt.sign({ foo: 'bar' }, consts.keyJWT,{expiresIn: consts.expiresJWT});   
            //console.log(token);
            //let token = jwt.sign({_id: user._id}, consts.keyJWT,{expiresIn: consts.expiresJWT}); 
            return res.status(200).json({message: token}); 
        }
        catch(e) {
            
            res.status(500).json({message: 'Erro na execução', error: e});
        }    
 
    }); 

    application.post('/testeCripto',function(req,res)
    {

        try {
            var user = req.body; 
            let pwd_cript  = '12332112331'; //this.criptografa(user);   
            //console.log(pwd_cript.message);
            
             return res.status(200).json({...user, senha: pwd_cript}); 
        }
        catch(e) {
            res.status(500).json({message: 'Erro na execução gera_usr', error: e});
        }    
 
    });     


    

}
 