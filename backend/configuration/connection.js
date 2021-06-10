require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://abdul-mir:lavalamp1738@canvas-project.kz42q.mongodb.net/canvas?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.error("MongoDB Connection Failed", error);
        process.exit();

    }
};

module.exports = connectDB;

