const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://halakhushi360:test@test.ml8zs.mongodb.net/?retryWrites=true&w=majority&appName=test');
    console.log('connect to database');
}

module.exports = connectDB;