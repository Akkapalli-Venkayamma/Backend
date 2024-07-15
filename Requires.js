const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const Students10 = require('./Routes/Students10');
//const Teachers = require('./Routes/Teachers')
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/Students10', Students10);
//app.use('/Teachers', Teachers);
module.exports = app;