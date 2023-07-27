const router = require('express').Router();
const userController = require('../controllers/user.controller');

// Register a new user 

router.post('/register', userController.createUser);

// Get all users 
router.get('/all', userController.getAllUsers);

router.put('/user/:id', userController.updateUser);

router.delete('/user/:id', userController.deleteUser);


module.exports = router; 


