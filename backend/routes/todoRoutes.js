const express = require('express');
const router = express.Router();

const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleTodo
} = require('../controllers/todoController');

const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getTodos);
router.post('/', authMiddleware, createTodo);
router.put('/:id', authMiddleware, updateTodo);
router.delete('/:id', authMiddleware, deleteTodo);
router.patch('/:id/toggle', authMiddleware, toggleTodo);

module.exports = router;