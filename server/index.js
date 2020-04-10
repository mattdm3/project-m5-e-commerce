'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
//data file for items
const items = require('./data/items.json');
const PORT = 4000;
const handleItemsData = (req, res) => {
  //caterogy, name, price, image, companyID
  let page = req.query.page; //1
  let limit = req.query.limit; //9
  let firstIndex = (page - 1) * limit; //0
  let endIndex = (limit * page);//9
  let slicedItems = items.slice(firstIndex, endIndex)
  //will send back 9 items.
  res.send(slicedItems)
  // res.send(items)
}
express()
  .use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('./server/assets'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', express.static(__dirname + '/'))
  // REST endpoints?
  // .get('/bacon', (req, res) => res.status(200).json('🥓'))
  //Item Data endpoint
  .get('/items', handleItemsData)
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));