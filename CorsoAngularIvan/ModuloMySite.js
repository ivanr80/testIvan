//inizializzo il modulo applicazionne
angular.module('myApp', [])
    
    .controller("userController", function($scope){
           $scope.utente = {nome: "Mario", cognome: "Rossi"};
    })
    
    .controller("greetingController", function ($scope){ 
           $scope.saluta = function() {
				return "Buongiorno " +
					   $scope.utente.nome + " " +
					   $scope.utente.cognome + "!" };

    })

    .controller("selectColor", function($scope){
        $scope.color = {colore: ""};
    });


