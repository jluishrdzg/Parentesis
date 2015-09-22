var express = require('express');
var fs = require('fs');
var mysql = require('mysql');
var app = express();

app.get('/', mostrarIndex);

function mostrarIndex(request, response) {
  response.writeHead(200, {'Context-Type': 'text/html'});
  fs.createReadStream('./index.html').pipe(response);
}

app.get('/guardarDireccion', guardarDireccion);

function guardarDireccion(request,response){
	console.log(request.query.nombre);
  response.send('hola');
}

// carpetas que obtendran rutas estaticas para importar en el proyecto
app.use('/img', express.static(__dirname + '/img'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/libs', express.static(__dirname + '/libs'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
// ----------------------------------------------------------------------

// conexion con mysql ----------------------------
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'luis',
//   database: 'personajes',
//   port: '3306'
// });


// connection.connect(function (error) {
//   if(error) throw error;
//   else console.log('Conexion correcta.');
// });

// ------------------------------------------------

var server = app.listen(8888, function(){
});
