const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const favoritesSchemaModule = require('../modules/schema.module');

let favoritesSchema = favoritesSchemaModule;
let Favorite = mongoose.model('Favorite', favoritesSchema);

// POST route
router.post('/', (req, res) => {
    //console.log('data to save: ', req.body);
    // create an instance of our model
    let favoriteToAdd = new Favorite(req.body);

    // create a new Document in our database and collection
    favoriteToAdd.save( (error, savedFavorite) => {
        if (error) {
            console.log('error on save: ', error);
            res.sendStatus(500);            
        } else {
            //console.log('new favorite Document: ', savedFavorite);            
            res.sendStatus(201);
        }
    }); // end save
}); // end post route

// GET route based on favorited being true
router.get('/', (req, res) => {
    Favorite.find({'favorited': 'true'}, (error, foundFavorites) => {
        if(error) {
            console.log('error on find:', error);
            res.sendStatus(500);
        } else {
            //console.log('found Favorite documents', foundFavorites);
            res.send(foundFavorites);
        }
    })
}); // end get route

// Delete favorite by id
router.delete('/:id', (req, res) => {
    let favoriteId = req.params.id;
    Favorite.findByIdAndRemove(
        {'_id': favoriteId},
        (error, removedDocument) => {
            if(error) {
                console.log('error on delete', error);
                res.sendStatus(500);
            } else {
                //console.log('document has been removed', removedDocument);
                res.sendStatus(200);
            }
        });
}); // end delete route

router.get('/favoriteCount', (req,res)=>{
    Favorite.count({}, (error, favoriteCount) => {
        if(error) {
            console.log('error get favorite count', error);
            res.sendStatus(500);
        } else {
            //console.log('found favorite count: ', favoriteCount);
            let numberOfFavorites = { count: favoriteCount}
            res.send(numberOfFavorites);
        }
    });
});

module.exports = router;