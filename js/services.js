var app = angular.module("servicio",[]);

app.service("proxy",["$http",function($http){
	var servicio={};


	servicio.guardarDireccion = function (nombre,apellido,calle,numeroPostal) {
		return $http({
			method: 'GET',
			url: 'http://localhost:8888/guardarDireccion?nombre='+ nombre +'&apellido='+ apellido
			+ '&calle='+ calle + '&numeroPostal=' + numeroPostal
		});
	}

	servicio.listar = function(){
		return $http({
			method: 'GET',
			url: 'http://localhost:8888/listar'
		});
	}

	// alert("entre al app.service");
	return servicio;
}]);
