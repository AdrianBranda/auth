const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Faltan datos' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        User.create(username, email, hashedPassword, (err, userId) => {
            if (err) {
                return res.status(400).json({ error: 'Usuario o email ya existen' });
            }
            res.status(201).json({ message: 'Usuario creado', userId });
        });
    } catch (err) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Faltan datos' });
    }

    try {
        User.findByEmail(email, async (err, user) => {
            if (err || !user) {
                return res.status(401).json({ error: 'Credenciales incorrectas' });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ error: 'Credenciales incorrectas' });
            }

            const token = jwt.sign(
                { userId: user.id, username: user.username },
                'secreto_super_seguro',
                { expiresIn: '1h' }
            );

            res.json({ token, username: user.username });
        });
    } catch (err) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
};

module.exports = { register, login };