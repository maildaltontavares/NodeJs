 
const api = require("../../app/controllers/authController.js") ;
 

module.exports=function(application){  

    application.get('/auth_jwt',api.gerar_token);

    application.post('/auth_cripto',api.gerar_pwd_cripto); 

}
