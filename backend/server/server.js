
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const authenticate = require('./middlewares/authMiddleware');
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use(express.static(path.join(__dirname, '../../frontend/public')));
app.get('/dashboard.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/dashboard.html'));
});
app.use('/auth', authRoutes);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/public/index.html'));
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`Frontend disponible en http://localhost:${PORT}/index.html`);
});