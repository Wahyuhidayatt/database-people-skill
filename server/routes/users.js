const express = require('express');
const router = express.Router()
const Controller = require('../controllers/userController');

router.post('/user', Controller.create)
router.get('/user', Controller.getAllUser)
router.get('/user', Controller.getOne)
router.put('/user', Controller.update)
router.delete('/user', Controller.delete)

module.exports = router
