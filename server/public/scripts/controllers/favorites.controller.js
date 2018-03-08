myApp.controller("SwapiFavoritesController", ['SwapiService', function(SwapiService){
	const self = this;

	// Verify service is working and shared with the views
	// self.message = SwapiService.message;

	self.favorites = SwapiService.favorites;
	self.favoriteCount = SwapiService.favoriteCount;

	// run the getFavorites function
	self.getFavorites = function() {
		SwapiService.getFavorites();
	}

	// delete Favorite
	self.deleteFavorite = function(favoriteId) {
		SwapiService.deleteFavorite(favoriteId);
	}

	// get count of favorites
    self.getFavoriteCount = function() {
        SwapiService.getFavoriteCount();
    }

	self.getFavorites();
}]);