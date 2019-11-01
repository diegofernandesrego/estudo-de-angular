angular.module("listaTelefonica").factory("contatosAPI", function($http, config){

    var _getContatos = function(){
       return $http({
        method: 'GET',
        url: config.baseUrl + '/contato'
        });
    }

    var _saveContato = function(contato){
        return  $http(
            {
                method: 'POST',
                url: config.baseUrl + '/contato',
                data: contato
            }
        )
    }

   

    return{
        getContatos: _getContatos,
        saveContato: _saveContato
        
    }
});