//setting up the server(node.js+express)
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
//middleware
app.use(cors());
app.use(express.json());
//connect to mongoDB
moongose.connect(process env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then (() => console.log(err));
//Define routes
app.get('/', (req, res) => {
	res.send ('Welcome to the AI Quiz App');
});
const port = process.env.PORT || 5000;
app.listen (port, () => console.log('Server running on port ${port}'));
