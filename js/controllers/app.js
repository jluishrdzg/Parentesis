var app = angular.module('app',['servicio']);
app.controller('ctrlApp', ['$scope', 'proxy', function($scope,proxy){
	$scope.nombre = '';
	$scope.apellido = '';
	$scope.calle = '';
	$scope.numeroPostal = '';
	$scope.estados = '';
	$scope.pais = '';

	$scope.ocultar =  true;

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
