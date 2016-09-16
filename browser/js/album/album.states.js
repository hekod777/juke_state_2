juke.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: '../../albums.html',
    controller: 'AlbumsCtrl',
  })
  .state('album',{
  	url:'/album/:id',
  	templateUrl:'../../album.html',
  	controller:'AlbumCtrl',
  })

});