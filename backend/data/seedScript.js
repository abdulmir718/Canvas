require('dotenv').config();

const paintingsData = require('./paintingSeedData');
const connectDB = require('../configuration/connection');
const Painting = require('../models/Paintings');

connectDB();

const importData = async () => {
    try {
        await Painting.deleteMany({});
        
        await Painting.insertMany(paintingsData);

        console.log("Data Was Imported Succesfully");
        
        process.exit();

    } catch (error) {
        console.error("Data Import Was Unsuccessful", error);
        process.exit();
    }
};

importData();