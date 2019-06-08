const express = require('express');
const router = express.Router();
const create_task = require('../controllers/create_controller');

router.post('/create-task',create_task.Task);


module.exports = router;