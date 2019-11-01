

angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, operadorasAPI, contatosAPI, $http, serialGenerator) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];


    console.log(serialGenerator.gerenate());
    
    var carregarContatos = function () {
        contatosAPI.getContatos().then(function(reponse){
            $scope.contatos = reponse.data;
        }, function(error){
            $scope.error = "Aconteceu um problema: " + error;
        });
    };

    var carregarOperadoras = function(){
        operadorasAPI.getOperadoras().then( successCallback, errorCallback );

        function successCallback(response){
            $scope.operadoras = response.data;
        }
        function errorCallback(error){
            $scope.error = "Aconteceu um problema: " + error;
        }
    };
    

   
    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.gerenate();

       contatosAPI.saveContato(contato).then( successCallback, errorCallback );

        function successCallback(response){
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        }
        function errorCallback(error){
            $scope.error = "Aconteceu um problema: " + error;
        }
        
    };
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    carregarContatos();
    carregarOperadoras();
});