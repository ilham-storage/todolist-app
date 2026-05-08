const db = require('../config/db');

// GET TODOS
const getTodos = async (req, res) => {
  const userId = req.user.id;

  const [rows] = await db.query(
    'SELECT * FROM todos WHERE user_id = ?',
    [userId]
  );

  res.json(rows);
};

// CREATE TODO
const createTodo = async (req, res) => {
  const userId = req.user.id;
  const { title } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      message: "Title wajib diisi"
    });
  }

  await db.query(
    'INSERT INTO todos (user_id, title) VALUES (?, ?)',
    [userId, title]
  );

  res.json({
    message: "Todo berhasil ditambahkan"
  });
};

// UPDATE TODO
const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const userId = req.user.id;
    const { title } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({
        message: "Title wajib diisi"
      });
    }

    const [rows] = await db.query(
      'SELECT * FROM todos WHERE id = ? AND user_id = ?',
      [todoId, userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        message: "Todo tidak ditemukan atau bukan milikmu"
      });
    }

    await db.query(
      'UPDATE todos SET title = ? WHERE id = ? AND user_id = ?',
      [title, todoId, userId]
    );

    res.json({
      message: "Todo berhasil diupdate"
    });

  } catch (err) {
    res.status(500).json({
      message: "Terjadi kesalahan server"
    });
  }
};

// DELETE TODO
const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const userId = req.user.id;

    if (isNaN(todoId)) {
      return res.status(400).json({
        message: "ID tidak valid"
      });
    }

    const [rows] = await db.query(
      'SELECT * FROM todos WHERE id = ? AND user_id = ?',
      [todoId, userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        message: "Todo tidak ditemukan atau bukan milik kamu"
      });
    }

    await db.query(
      'DELETE FROM todos WHERE id = ? AND user_id = ?',
      [todoId, userId]
    );

    res.json({
      message: "Todo berhasil dihapus"
    });

  } catch (err) {
    res.status(500).json({
      message: "Terjadi kesalahan server"
    });
  }
};

const toggleTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const userId = req.user.id;

    // cek todo
    const [rows] = await db.query(
      'SELECT * FROM todos WHERE id = ? AND user_id = ?',
      [todoId, userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        message: "Todo tidak ditemukan"
      });
    }

    const todo = rows[0];
    const newStatus = Number(todo.is_done) === 1 ? 0 : 1;

    await db.query(
      'UPDATE todos SET is_done = ? WHERE id = ? AND user_id = ?',
      [newStatus, todoId, userId]
    );

    res.json({
      message: "Status berhasil diubah"
    });

  } catch (err) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleTodo
};