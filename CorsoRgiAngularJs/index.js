 //inizializzo il modulo applicazionne
var app = angular.module('mioNegozio', ['carrello', 'ngRoute']);

//funzione eseguita al caricamento dell'applicazione
//in questa fase ho accesso agli elementi provider
app.config(function($routeProvider){
    //associo un "ancora" ad una rotta (file html)
    $routeProvider.when("/prodotti", {
       templateUrl:"prodotti.html" 
    });
    
    $routeProvider.when("/dettagliCarrello", {
       templateUrl:"dettagliCarrello.html" 
    });
    
    //la rotta di default
    $routeProvider.otherwise({redirectTo:'/prodotti'});
});

//aggiungo un controller al modulo prodottiController
app.controller('prodottiController', prodottiCtrl)

//dichiaro trai i parametri i nomi degli oggetti di cui ho bisogno
//$http = è un servizio che possibile ingenttare dove è nnecessairo
function prodottiCtrl($scope, $http, carrelloService){
    //questa funzione vienne eseguita quando angular deve renderizzare la parte di pagina
    //associata al controller
    //inizializza l'area di memoria associata al div
    
    $scope.prodotti = [];
    //1 - parte la richiesta
    var promise = $http.get('http://localhost:3000/prodotti');
    promise.then(function(response){ //funzione eseguita quando arriva la response
                    //3- arriva la response
                    $scope.prodotti = response.data;
                 });
    
    promise.catch(function(){
        console.log('Errore!')
    });
    
    //2 - continua nel codice (richiesta asincrona)
/*
    $scope.prodotti = [
        {id:1, 
         nome:'Maglia',
         categoria:'Abbigliamento',
         descrizione:'Una maglia...',
         disponibile: true,
         prezzo:10.2
        },
        {id:2, 
         nome:'Scarpe',
         categoria:'Abbigliamento',
         descrizione:'Delle scarpe...',
         disponibile: false,
         prezzo:20.5
        },
        {id:3, 
         nome:'Computer',
         categoria:'Elettronica',
         descrizione:'Un computer...',
         disponibile: true,
         prezzo:100.50
        }
    ];
*/    
    $scope.categoriaSelezionata = null;
    //definiamo un behaviour
    $scope.selezionaCategoria = function(categoria){
        $scope.categoriaSelezionata = categoria;
    }
    
    $scope.aggiungi = function(prodotto){
        carrelloService.aggiungiAlCarrello(
            prodotto.id, prodotto.nome, prodotto.prezzo,1
        );
    }
}

//aggiungo un controller al modulo dettaglioProdottiController
app.controller('dettagliCarrelloController', function($scope, carrelloService){
    $scope.dati = carrelloService.getDatiCarrello();
    $scope.totaleQuantita = carrelloService.totaleQuantita();
    $scope.totaleValore = carrelloService.totaleValore();
    
    $scope.inviaOrdine = function(){
        console.log($scope.nomeUtente);
    }
    
})