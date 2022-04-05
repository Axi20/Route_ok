require('dotenv').config;
const mongoose = require('mongoose');


const connectToDatabase = () => {
    const MONGO_URI = process.env.MONGO_URI;
    mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Database succesfully connected!");
    })
    .catch((error) => {
        console.log(error.message);
    });
};

module.exports = connectToDatabase;