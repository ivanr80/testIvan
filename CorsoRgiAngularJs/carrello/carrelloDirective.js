//nuova direttiva
//la direttiva puù essere chiamata atterverso tag (E), attributo(A), classeCSS (C), comment (M)

angular.module('carrello')
.directive('indicatoreCarrello', function(carrelloService){  //funzione costruttore
    
    //la direttiva deve restituire un oggettino javascript
    //deve restituire un oggetto che descrive la direttiva
    return{
        restrict : 'E', //<indicatore-carrello>
        template : '<div> {{totale()}} </div>',
        controller:function($scope){
            //definendo una funzione Angular la richiamerà per aggiornare il valore
            $scope.totale = function(){
                return carrelloService.totaleQuantita()
            }
        }
        
    }
});