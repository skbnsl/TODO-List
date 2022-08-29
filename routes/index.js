const express = require('express');

const router = express.Router();

//require homecontroller module to handle the routes
const homeController = require('../controllers/home_controller');


console.log('router loaded');

//for home page
router.get('/', homeController.home);

//for adding the task
router.post('/add-Task', homeController.add);


//for deleting the task
router.get('/delete-task', homeController.delete);

module.exports = router;