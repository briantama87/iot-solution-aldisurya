const express = require('express')

const router = express.Router();

const mainController = require('../controllers/main');

router.get('/salarytable', mainController.getSalary);
router.get('/sensor', mainController.getsensor);
router.get('/sensordata', mainController.sensorData);

module.exports = router;