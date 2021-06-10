require('dotenv').config();
const express = require('express');
const connectDB = require('./configuration/connection.js');
const paintingsRoute = require('./routes/paintingsRoute');
connectDB();

const app = express();

app.use(express.json());

app.use('/paintings', paintingsRoute)
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Successfully Connected: Server running on Port ${PORT}`));
