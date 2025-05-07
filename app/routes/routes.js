const express = require('express');
const homeController = require('../controllers/homeController.js');
const classesController = require('../controllers/classesController.js'); 
 
 
// permet d'indiquer les routes a emprunter
const router = express.Router();
 
 
 
//Mise en place d'une route
router.get('/' , homeController.getHomePage);

//Mise en place de la route qui mène à la liste des classes
router.get('/classesList', classesController.getClasseslistPage );

//page d'entrainement
// router.get('/toto' , homeController.getTotoPage)
 
 
 
 
module.exports = router;
 