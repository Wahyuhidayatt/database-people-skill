const express = require('express');
const router = express.Router()
const Controller = require('../controllers/skillController');

router.post('/skill', Controller.add)
router.get('/skill', Controller.get)
router.delete('/skill', Controller.delete)

module.exports = router
