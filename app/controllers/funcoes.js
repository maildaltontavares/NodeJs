var crypto = require('crypto');
const consts = require('../../consts.js');
const jwt = require('jsonwebtoken');  

function teste(req,res)
{

    res.send('<html><body>Funcao Teste</html></body>');
}



function criptografa(usuario) { 

    try {
         
        let senha_criptografada = crypto.createHash("md5").update(usuario.senha).digest("hex");  
        return  senha_criptografada ;   
    }
    catch(e) {
        res.status(500).json({message: 'Erro na execução', error: e});
    }  

}


function gerar_token(req, res) {    
    try {
        var token = jwt.sign({ foo: 'bar' }, consts.keyJWT,{expiresIn: consts.expiresJWT});   
        //console.log(token);
        //let token = jwt.sign({_id: user._id}, consts.keyJWT,{expiresIn: consts.expiresJWT}); 
        return res.status(200).json({message: token}); 
    }
    catch(e) {
        res.status(500).json({message: 'Erro na execução', error: e});
    }   

}  

function gerar_pwd_cripto(req, res) {    
    try {

        //console.log(req.body);
        var user = req.body; 
        let pwd_cript  =  criptografa(user);  
        
        return res.status(200).json({...user, senha: pwd_cript});

    }
    catch(e) {
        res.status(500).json({message: 'Erro na execução gera_usr 999', error: e});
    }   

} 


module.exports= { teste , gerar_token, gerar_pwd_cripto }
