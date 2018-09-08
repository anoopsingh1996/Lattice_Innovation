var myNinjaApp = angular.module('myNinjaApp',[]);

myNinjaApp.controller('NinjaController',function($scope){

   $scope.removeNinja = function(ninja) {
     var removeNinja = $scope.ninjas.indexOf(ninja);
     $scope.ninjas.splice(removeNinja, 1);
   };

   $scope.addNinja = function() {
      $scope.ninjas.push({
        name: $scope.newninja.name,
        available: true
      });
     $scope.newninja.name = ""
   };

   $scope.addNinja1 = function() {
      $scope.lattice.push({
        name: $scope.newninja1.name,
        available: true
      });
     $scope.newninja1.name = ""
   };

   $scope.addNinja2 = function() {
      $scope.terllo.push({
        name: $scope.newninja2.name,
        available: true
      });
     $scope.newninja2.name = ""
   };


    $scope.ninjas = [
      {
        name: "Backbone",
        available: true
      },
      {
        name: "Marrionate",
        available: true
      },
      {
        name: "React-Native",
        available: true

      },
    ];
    $scope.lattice = [
      {
        name: "Github",
        available: true

      },
      {
        name: "Git-log",
        available: true

      }
    ];

    $scope.terllo = [
      {
        name: "Ninjas",
        available: true

      },
      {
        name: "React to Angular",
        available: true

      }

    ];
});
