var app = angular.module('app',['servicio']);
app.controller('ctrlApp', ['$scope', 'proxy', function($scope,proxy){
	$scope.nombre = '';
	$scope.apellido = '';
	$scope.calle = '';
	$scope.numeroPostal = '';
	$scope.estados = '';
	$scope.pais = '';
	$scope.direcciones = [];

	$scope.ocultar =  true;

	proxy.listar().success(function (data){
		for ( var i = 0; data.length - 1; i++ ) {
			$scope.direcciones[i] = {
				'nombre' : data[i].nombre,
				'apellido' : data[i].apellido,
				'calle' : data[i].calle,
				'numeroPostal' : data[i].numeroPostal
			}
		};
	}).error(function(){alert('Error en la base de datos')});

	$scope.showForm = function() {
		$scope.ocultar = !$scope.ocultar;
	}

	$scope.guardarDireccion = function() {
			proxy.guardarDireccion($scope.nombre,
							$scope.apellido,
							$scope.calle,
							$scope.numeroPostal).success(function(data){

			}).error(function(){alert('Error en la base de datos')});
		}
}]);
