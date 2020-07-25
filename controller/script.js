angular.module('pokeApp', []);

angular.module('pokeApp').controller('pokeController', function($scope, pokeService) {

    $scope.page = 0;

    $scope.getPokemon = function() {
        pokeService.getPokemon($scope.page).then(function(results) {
            $scope.pokemon = results;
            // console.log(results);
            var a = results;
            for(page=1; page < a.length; page++) {
                // console.log(page)
            }
        });
    };

    $scope.getPokemon();

    $scope.getMore = function(url) {
        pokeService.getMore(url).then(function(results) {
            $scope.pokeInfo = results;
            console.dir($scope.pokeInfo);
        });
    };

    $scope.advancePage = function() {
        $scope.page++;
        $scope.getPokemon();
    }

    $scope.retreatPage = function() {
        if ($scope.page > 0) {
            $scope.page--;
            $scope.getPokemon();
        }
    }

    $scope.clearSearch = function () {
        $scope.search.name = "";
        $scope.checked = null;
    };

    $scope.users = [
        {
        name : "Rizal Valry",
        email : "rizal.muh.rzl@gmail.com", 
        desc : "2020",
        title : "Poke Angular"
        },
    ];

    $scope.string =
     'Poke Angular Js';

});

const img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

angular.module('pokeApp').service('pokeService', function($http) {

    var pokeUrl = 'https://pokeapi.co/api/v2/';
 

    this.getPokemon = function(page) {

        return $http({
        method: 'GET',
        url: pokeUrl + 'pokemon/?limit=20&offset=' + (page * 20),
        }).then(function(results) {
            // console.log(page);
            return results.data.results;
        });

       
    };

    this.getMore = function(url) {
        return $http({
            method: 'GET',
            url: url
        }).then(function(results) {
            return results.data;
        });
    };
});

function saveDynamicDataToFile() {
    var userInput = document.getElementById("myText").value;

    var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "pokeapi.txt");
}

('ngShow', function() {
    var checkbox = element(by.model('checked'));
    var checkElem = element(by.css('.check-element'));
    
    expect(checkElem.isDisplayed()).toBe(true);
    checkbox.click();
    expect(checkElem.isDisplayed()).toBe(false);
});