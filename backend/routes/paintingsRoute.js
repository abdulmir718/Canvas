const express = require('express');
const router = express.Router();

const{getAllPaintings, getPaintingsById} = require('../controller/paintingController');

//GET all products from database
router.get('/', getAllPaintings)

//GET a product by id from the database
router.get('/:id', getPaintingsById)

module.exports = router;