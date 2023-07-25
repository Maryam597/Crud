const router = require('express').Router();
const userController = require('../controllers/user.controller');

// Register a new user 

router.post('/registeruser', userController.createUser);

// Get all users 
router.get('/all', userController.getAllUsers);


module.exports = router; 