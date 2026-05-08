const express = require('express');
const app = express();
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
const cors = require('cors');

app.use(express.json());


app.use(cors());
app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);

// const userRoutes = require('./routes/userRoutes');

// app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server jalan di port 3000');
});