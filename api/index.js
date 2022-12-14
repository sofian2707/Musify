'use strict'

var mongoose = require('mongoose');
var app= require('./app');

//configuracion de puerto servidor web
var port= process.env.PORT || 3000;


//conexion a la bd 

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean', (err, res) => {
    if(err){
        throw err;
    }else{
        console.log("La conexion a la base de datos funciona correctamente");

        app.listen(port, function(){
            console.log("Servidor del api rest de musica escuchando en http://localhost:"+port);
        })
    }
});