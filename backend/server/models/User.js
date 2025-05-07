const db = require('../database');
class User {
    static create(username, email, passwordHash, callback) {
        db.run(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, passwordHash],
            function(err) {
                callback(err, this.lastID);
            }
        );
    }

    static findByEmail(email, callback) {
        db.get('SELECT * FROM users WHERE email = ?', [email], callback);
    }
}

module.exports = User;