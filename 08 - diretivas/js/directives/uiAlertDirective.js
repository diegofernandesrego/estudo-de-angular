angular.module("listaTelefonica").directive("uiAlert", function(){
    return{
        templateUrl: "view/alert.html",
        replace: true,
        restrict: "AE",
        scope: {
            //title: "@title" assim também funciona
            title: "@",
            //message: "=message", pode ser assim também
            //o sinal de igual faz o relacionamento Bidirecional entre os scopos
            message: "="
        }

    };
});

//caso o 