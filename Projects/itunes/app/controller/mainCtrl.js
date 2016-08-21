angular
  .module('itunes')
  .controller('mainCtrl', function($scope, mainSrvc){
    $scope.gridOptions = {
        data: 'songData',
        height: '110px',
        sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
        columnDefs: [
          {field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}" target="_blank"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
          {field: 'Song', displayName: 'Song Name'},
          {field: 'Artist', displayName: 'Artist'},
          {field: 'Collection', displayName: 'Collection'},
          {field: 'AlbumArt', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
          {field: 'Type', displayName: 'Type'},
          {field: 'CollectionPrice', displayName: 'Collection Price'},
        ]
    };

    $scope.getInfo = function(artist) {
      mainSrvc.getArtistInfo(artist).then(function(results) {
        var songData = [];
        console.log(results.data.results);
        for(var i = 0; i < results.data.results.length; i++) {
          songData.push(
            {
              "Play": results.data.results[i].previewUrl,
              "Song": results.data.results[i].trackName,
              "Artist": results.data.results[i].artistName,
              "Collection": results.data.results[i].collectionName,
              "AlbumArt": results.data.results[i].artworkUrl30,
              "Type": results.data.results[i].kind,
              "CollectionPrice": results.data.results[i].collectionPrice
            }
          );
        }
        $scope.songData = songData;
      });
    };
});
