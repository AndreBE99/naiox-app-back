const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
mongoose.set('strictQuery', true);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database connected'));

module.exports = db;
