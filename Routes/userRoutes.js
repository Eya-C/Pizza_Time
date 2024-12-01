const express = require ('express');
const {registerUser , loginUser} =require ('../controllers/userController');
const { validateRegister, validateLogin } = require('../validators/userValidator');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);


module.exports = router;
