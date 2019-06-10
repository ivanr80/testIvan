//factory è un metodo per creare e registrare un SERVIZIO in angularjs 
angular.module('carrello')
.factory('carrelloService', function(){// funzione cotruttore
    
    var datiCarrello = []; //variabile privata (perchè questa variabile a differenza di 'servizio' che viene ritornata)
    
    var servizio = { //oggetto servizio è public e sarà condivisa da tutti i modulii che la includono
        
    };
    
    
    //SINTASSI creazione metodo/funzionejs: aggiungiAlCarrello : function(){
    //oppure come segue
    servizio.aggiungiAlCarrello = function(pIdProdotto, pNomeProdotto, pPrezzo, pQuantita)
    {
        var trovato = false;
        for(var i=0; i<datiCarrello.length; i++){   // NB: al primo giro l'array datiCarrello sarà vuoto
            if(datiCarrello[i].idProdotto==pIdProdotto){
                trovato = true;

                //incremento quantita
                datiCarrello[i].quantita+=pQuantita;
                break;
            }
        }
        if(!trovato){
            //nuova riga
            datiCarrello.push({idProdotto : pIdProdotto,
                              nomeProdotto : pNomeProdotto,
                              prezzo : pPrezzo,
                              quantita : pQuantita
                              });
        }
        console.log(datiCarrello);
    }

    //metodo getDatiCarrello
    servizio.getDatiCarrello = function(){
        return angular.copy(datiCarrello);
    }
    
    //funzione che calcola il totale quantita ciclando 
    servizio.totaleQuantita = function(){
        var risultato = 0;
        datiCarrello.forEach(function(el){risultato+=el.quantita;});
        return risultato;
    }
    
    //funzione che calcola il totale valore ciclando 
    servizio.totaleValore = function(){
        var risultato = 0;
        datiCarrello.forEach(function(el){risultato+=el.prezzo * el.quantita;});
        return risultato;
    }
    
    return servizio;   
});