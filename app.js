var app = require("./config/server");   
 
PORT = process.env.PORT || 3000;
app.listen(PORT,function(){
    console.log('Servidor ativo na porta 3000.');
}); 