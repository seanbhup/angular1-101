var movieApp = angular.module('movieApp',[]);
movieApp.controller('movieController',($scope,$http)=>{



    var movieURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5&language=en-US&page=1';

    $scope.imagePath = 'http://image.tmdb.org/t/p/w300/';

    $http({
        method: 'GET',
        url: movieURL
    }).then(
        function successFunction(movieData){
            $scope.movieArray = movieData.data.results;
            console.log(movieData);

        },function failureFunction(movieData){
            console.log(movieData);
    });


    // var apiKey = 'RGAPI-3c76f7d8-08c8-4890-bbd9-cce46afdc2a5'
    // var riotUrl = 'https://na1.api.riotgames.com/lol/platform/v3/champions'
    //
    // $http({
    //     method: 'GET',
    //     url: riotUrl
    // }).then(
    //     function successFunction(riotData){
    //         $scope.movieArray = movieData.data.results;
    //         console.log(riotData);
    //     },function failureFunction(riotData){
    //         console.log(riotData);
    //     }
    // )

    // var apiKey = "bf21e4ab8a3b4fa2bbbf54374171a888";
    //
    // $http({
    //     url: "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1456315384/",
    //     headers: {
    //         "X-API-Key": '55d576ddefc946e3b1ebc412b78e1b8d'
    //     }
    // }).then(
    //     function successFunction(bungieData){
    //         console.log(bungieData)
    //         // console.log(bungieData.data.Response.data.inventoryItem);
    //     },function failureFunction(bungieData){
    //         console.log(bungieData);
    // });
})
