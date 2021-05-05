var app = require("./config/server");   
 
var porta = process.env.PORT || 3000;
app.listen(porta,function(){
    console.log('Servidor ativo na porta 3000.');
}); 