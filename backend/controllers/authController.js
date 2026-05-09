const db = require('../config/db');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  try {
    const { nama, password } = req.body;

    if (!nama || !password) {
      return res.status(400).json({
        message: "Data tidak lengkap"
      });
    }

    // cek user sudah ada
    const [rows] = await db.query(
      'SELECT * FROM users WHERE nama = ?',
      [nama]
    );

    if (rows.length > 0) {
      return res.status(400).json({
        message: "User sudah terdaftar"
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // INSERT ke database
    await db.query(
      'INSERT INTO users (nama, password) VALUES (?, ?)',
      [nama, hashedPassword]
    );

    res.json({
      message: "Register berhasil"
    });

  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: "Terjadi kesalahan server"
    });
  }
};

const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
    const { nama, password } = req.body;

    const [rows] = await db.query(
      'SELECT * FROM users WHERE nama = ?',
      [nama]
    );

    if (rows.length === 0) {
      return res.status(400).json({
        message: "User tidak ditemukan"
      });
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Password salah"
      });
    }

    const token = jwt.sign(
      { id: user.id, nama: user.nama },
      "SECRET_KEY",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login berhasil",
      token
    });

  } catch (err) {
    console.error(err); // 🔥 penting buat debug
    res.status(500).json({
      message: "Terjadi kesalahan server"
    });
  }
};

module.exports = { 
    register,
    login
};