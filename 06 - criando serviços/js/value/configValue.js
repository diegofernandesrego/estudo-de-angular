/*angular.module("listaTelefonica").value("config", {
    baseUrl:"http://localhost:8080"
})*/


angular.module("listaTelefonica").constant("config", {
    baseUrl:"http://localhost:8080"
})

//value e constant são bem similares .
// Adiferença e que o constant pode ser injetado em serviços do tipo provider