var mongoose = require('mongoose'); //VOU USAR MONGOOSE

var db = mongoose.connect('mongodb://localhost/library').connection; //VOU ABRIR A CONEXAO COM MEU BANCO UTILIZANDO MONGOOSE

db.on('open', function() { //LISTENER DO EVENTO OPEN, IF OPEN CONSOLE LOG
    console.log("MongoDB is connected");
});

db.on('error', function() { //LISTENER DO EVENTO ERROR AO CONECTAR, IF ERRO CONSOLE LOG
    console.log("An error ocurred in mongo connection");
});

return db;