// la sintassi del filtri sarà elenco    | mioDistinct: 'categoria'
angular.module('mioNegozio')
    .filter('mioDistinct', function(){ // questa la funzione costruttore
        return function(elenco, nomecampo){ //questa è la funzione del filtro
            
            //loggare nelle consolle del browser
            //console.log(elenco);
            //console.log(nomecampo);
            
            //questa è la funzione del filtro 
            if(angular.isArray(elenco) && angular.isString(nomecampo)){
                
                //Attnzione ai controlli con JS nativo
                //1=='1'  --- >> TRUE
                //'false' == false --- >> TRUE  (con due uguali controlla solo il valore)
                //'false' === false  --- >> FALSE (con tre uguali controlla anche il tipo oltre il valore)
                //if('false')   --- >> TRUE
                var valori = [];
                for(var i=0; i<elenco.length; i++){
                    var val = elenco[i][nomecampo];
                    if(val && valori.indexOf(val) ==-1){  //(val != null && valori non contiene val allora restituiscie -1)
                        valori.push(val);
                    }
                }
                return valori;
            }else{
                return elenco;
            }
    
    
        }                                    
    })

    .filter('mioCurrency', function($filter){ //$filter è un oggetto pre impostato, consente di richiamare i filtri in javascript
    
    // sintassi valore | mioCurrrency : '€'
    
    //valore = number, valuta=string, numDecimali=number
        return function(valore, valuta, numeroDecimali){
            //funzione da implementare
            
            if(!valuta){
                valuta = '€';
            }
            if(!numeroDecimali){
                numeroDecimali=2;
            }
            var funzioneNumber = $filter('number');
            return funzioneNumber(valore, numeroDecimali)+ ' '+valuta;
            
        }
    });