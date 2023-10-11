const Router = require('express');
const taskController = require('../controllers/taskController');
const router = new Router()


router.post('/:id', taskController.create);
router.get('/:id', taskController.getAll)

module.exports = router;