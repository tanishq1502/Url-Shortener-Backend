const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongouri');

const connectDB = async () => {
    try{
        mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected Successfully...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;