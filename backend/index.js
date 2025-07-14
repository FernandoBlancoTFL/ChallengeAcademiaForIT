const express = require('express');
const tasksRouter = require('./routes/tasks');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/tasks', tasksRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
