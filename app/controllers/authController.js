var crypto = require('crypto');
const consts = require('../../consts.js');
const jwt = require('jsonwebtoken');  

 

//module.exports.criptografa = function(application, req, res){

module.exports = {

    criptografa: function(usuario) { 

        try {
             
            let senha_criptografada = crypto.createHash("md5").update(usuario.senha).digest("hex");  
            return  senha_criptografada ;   
        }
        catch(e) {
            res.status(500).json({message: 'Erro na execução', error: e});
        }  

    },
        
 

    gera_token: function(application, req, res) {    
        try {
            var token = jwt.sign({ foo: 'bar' }, consts.keyJWT,{expiresIn: consts.expiresJWT});   
            //console.log(token);
            //let token = jwt.sign({_id: user._id}, consts.keyJWT,{expiresIn: consts.expiresJWT}); 
            return res.status(200).json({message: token}); 
        }
        catch(e) {
            res.status(500).json({message: 'Erro na execução', error: e});
        }   

    } ,

    gera_pwd_cripto: function(application, req, res) {    
        try {
            var user = req.body; 
            let pwd_cript  = this.criptografa(user);  
            
           // console.log(pwd_cript.message);
            
             return res.status(200).json({...user, senha: pwd_cript});
 
        }
        catch(e) {
            res.status(500).json({message: 'Erro na execução gera_usr', error: e});
        }   

    } 


} 

    
/*    
    register: async function(req, res) {
        try {
            let u = await UserModel.findOne({email: req.body.email});
            if (!u) {
                const user = new UserModel(req.body);
                user.password = bcrypt.hashSync(req.body.senha, consts.bcryptSalts);
                await user.save();
                delete user.password;
                res.status(200).json(user);
            }
            else {
                res.status(403).json({message: 'Email already registered', error: {}});
            }
        }
        catch(e) {
            res.status(500).json({message: 'Error while saving the user', error: e});
        }
    },

    login: function(req, res) {
        const password = req.body.password;
        const email = req.body.email;

        UserModel.findOne({email: email}).lean().exec(function(err, user) {
            if(err) {
                return res.status(500).json({
                    message: 'Server error', error: err });
            }
            const auth_err = (password == '' || password == null || !user);

            if (!auth_err) {
                if (bcrypt.compareSync(password, user.password)) {
                    let token = jwt.sign({_id: user._id}, consts.keyJWT,{expiresIn: consts.expiresJWT});
                    delete user.password;
                    return res.json({...user, token: token});
                }
            }
            return res.status(404).json({
                message: 'Wrong e-mail or password' })
        })
    } 


    check_token: function(req, res, next) {
        const token = req.get('Authorization');

        if (!token) {
            return res.status(401).json({message: 'Token not found'});
        }
        jwt.verify(token, consts.keyJWT, 
            (err, decoded) => {
                if (err || !decoded) {
                    return res.status(401)
                        .json({message: 'Wrong token. Athentication error'});
                }
                next();
            })
    },

    user_data: function(req, res) {
        const token = req.get('Authorization');
        jwt.verify(token, consts.keyJWT, 
            (err, decoded) => {
                const id = decoded._id;
                UserModel.findById(id).lean().exec(function(err, user) {
                    if (err || !user) {
                        return res.status(500).json({
                            message: 'Error when trying to fetch user data', error: err})
                    }
                    let token = jwt.sign({_id: user._id}, consts.keyJWT,{expiresIn: consts.expiresJWT});
                    delete user.password;                        
                    return res.json({...user, token: token});
                });
            });
    }




}    
*/