myApp.controller("SwapiSearchController", ['SwapiService', function(SwapiService){
    const self = this;
  
    // Verify service is working and shared with the views
    // self.message = SwapiService.message;
    
    self.searchResults = SwapiService.searchResults;
    self.resources = SwapiService.resources;
    self.favoriteCount = SwapiService.favoriteCount;

    // run the searchSwapi function
    self.searchSwapi = function(resource, keyword) {
      SwapiService.searchSwapi(resource, keyword);
    }

    // run the getResources function
    self.getResources = function() {
      SwapiService.getResources();
    }

    // run the addToFavorites function
    self.addToFavorites = function(favorite, favoriteIncrement) {
      SwapiService.addToFavorites(favorite, favoriteIncrement);
    }
    
    // get count of favorites
      self.getFavoriteCount = function() {
          SwapiService.getFavoriteCount();
      }

    self.getResources();
  }]);