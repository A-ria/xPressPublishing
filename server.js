const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('errorhandler');
const morgan = require('morgan');
const express = require('express');
const apiRouter = require('./api/api');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(errorHandler());
app.use('/api', apiRouter);






app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT);
});

module.exports = app;