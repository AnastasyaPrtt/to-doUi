const Router = require('express');
const taskController = require('../controllers/taskController');
const router = new Router()


router.post('/', taskController.create)
router.get('/', taskController.getAll)
router.put('/', taskController.update)
router.delete('/', taskController.delete)

module.exports = router;