var app= angular.module('animeApp',[]);

app.controller('animeCtrl',function($scope){
    $scope.personaje=personajeData;

    $scope.editando={};

    $scope.editarCampos=function(){
       angular.copy($scope.personaje,$scope.editando)
       $scope.mostrarCaja=true;
    }

    $scope.guardarCampos=function(){
        angular.copy($scope.editando,$scope.personaje)
        $scope.mostrarCaja=false;
    }

    $scope.cancelarCambios=function(){
        $scope.editando={};
        $scope.mostrarCaja=false;
    }

    $scope.mostrarCaja=false;

});


var personajeData={
    nombre: "Riuzaki",
    edad:16,
    imagen: "img/detective.jpg",
    bio:"Es un detective consultor internacional enigmático, sin nombre y muy apreciado que se comunica solo a traves de su igualmente inexplicable manejador / asistente: Watari, quien le sirve de enlace oficial con las autoridades"
}