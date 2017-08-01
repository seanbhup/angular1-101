var SMICKLEWORTHY = angular.module('SMICKLEWORTHY',[]);

SMICKLEWORTHY.controller('REEBCONTROLLER',($scope)=>{
    $scope.firstName = "Albert";
    $scope.lastName = "Sucks";
    $scope.characters = [
        'Ron',
        'Harry',
        'Hermione',
        'Hagrid',
        'Dumbledad'
    ];
    $scope.addCharacter = function(){
        $scope.characters.push($scope.newCharacter);
        $scope.newCharacter = '';
    };
    $scope.removeCharacter = function(characterName){
        var index = $scope.characters.indexOf(characterName);
        $scope.characters.splice(index,1);
    };
});
