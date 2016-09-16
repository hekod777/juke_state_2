juke.config(function($stateProvider){
	$stateProvider
		.state('artistList',{
			url:'/artists',
			templateUrl:'../../artists.html',
			resolve:{
				artists: function(ArtistFactory){
					return ArtistFactory.fetchAll();
				}
			},
			controller:'ArtistsCtrl',
		})
		.state('artist',{
  			url:'/artist/:id',
  			templateUrl:'../../artist.html',
  			controller:'ArtistCtrl',
  		})
  		.state('artist.albums',{
  			url:'/albums',
  			templateUrl:'../../artistAlbums.html',
  			controller:'ArtistCtrl',
  		})
  		.state('artist.songs',{
  			url:'/songs',
  			templateUrl:'../../artistSongs.html',
  			controller:'ArtistCtrl',
  		})
})