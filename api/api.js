const express = require('express');
const artistRouter = require('./artists');

const apiRouter = express.Router();
// require('./artists')(artistRouter);

apiRouter.use('/artists', artistRouter);


module.exports = apiRouter;