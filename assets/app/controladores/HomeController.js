app.controller('HomeController', ['$scope', '$http', 'toastr', 'UsuarioFactory', function($scope, $http, toastr, UsuarioFactory) {
  toastr.info('Info', 'Se cargo la vista Home');
}]);
