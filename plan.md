# SWAPI App Planning

## Initial project setup and testing
- [x] Connect the service to the two views, confirm that information can be shared between the views
    - [x] Confirmed working
- [x] Setup SWAPI in postman to determine search string and confirm GET is working
    - [x] Search string: `https://swapi.co/api/` + `resource` + `/?search=` + `keyword`
    - [x] Returns object with Resources: `https://swapi.co/api/`
    - [x] GET request confirmed returning
- [x] Determine what will be saved in the database along with the favorited flag (boolean)
    - [x] Saved in the database based on: `name` with unique flag turned on to prevent duplications
- [ ] Determine if the nav needs to be a third view to handle the favorites indicator
    - [ ] What needs to happen here??

## Considerations
- [x] Favorite icon counts from the saved favorites in the database
- [x] Search needs to combine the resource selected and the keyword typed

## Search Requirements
- [x] Resources drop-down
    - [x] GET resources as unique values and loop through them to display as a select list
    - [x] On click, that value is stored as part of the search string
- [x] Keywords input field
    - [x]  Added to the search string and submitted with button click
- [x] Submit button
    - [x] Combined the resources selection and the keyword input value to do a GET request

## Results Requirements (search view)
- [x] Loop through results from search GET request
- [x] Display Name from GET request
- [x] Have an add to favorites button to save to database

## Add to Favorites
- [x] Click on add to favorites button, and it does an POST to the database
- [x] Run a getFavoriteCount to update the saved/favorited icon in the toolbar
- [x] Run a getFavorites to update the list on the favorites tab

## Favorties View Requirements
- [x] getFavorites to display the list of favorites
- [x] Favorites card has a Remove Favorites button that removes the favorite from the database

## Remove Favorites
- [x] Click on remove favorite button and it removes it from the database with a DELETE request
- [x] getFavorites to update the list of favorites
- [x] getFavoriteCount to update the saved/favorited icon in the toolbar

## TODO
- [x] Fix issue with duplicate films (since they use title, not name)
- [ ] Get the data from API in the favorites view
- [ ] Finish readme.md