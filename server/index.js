'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
//data file for items
const items = require('./data/items.json');

const PORT = 4000;


const handleItemsData = (req, res) => {
  //caterogy, name, price, image, companyID
  let sort = req.query.sort
  console.log(sort)
  let page = req.query.page; //1
  let limit = req.query.limit; //9

  let sortItems;

  const defaultItems = items.slice()

  if (sort === 'lowToHigh') {
    console.log('low to high')
    sortItems = items.slice().sort(function (a, b) {

      return parseInt(a.price.replace('$', '').replace(',', '')) - parseInt(b.price.replace('$', '').replace(',', ''))
    });

  }
  else if (sort === 'highToLow') {
    console.log('high to low')
    sortItems = items.slice().sort(function (a, b) {

      return parseInt(b.price.replace('$', '').replace(',', '')) - parseInt(a.price.replace('$', '').replace(',', ''))
    })


  } else if (sort === 'bestMatch') {
    console.log("best match last else if", items[0].price)

    sortItems = items;

  }





  /*items.forEach((element, index) => {

    if (index < 20) {
      console.log(" testing for each", element.price)
    }

  });*/


  let firstIndex = (page - 1) * limit; //0
  let endIndex = (limit * page);//9
  let slicedItems = sortItems.slice(firstIndex, endIndex)
  console.log(slicedItems[0].price)

  //will send back 9 items.
  res.send(slicedItems)
}






const handleItemId = (req, res) => {
  let itemId = req.params.id;
  //if we received an itemId
  //filter through data
  let filteredItem = items.find(item => {
    if (itemId == item.id) {
      return item
    }
  })
  res.send(filteredItem)
}



const handleCategory = (req, res) => {

  let category = req.params.category;

  let matchedCategories = items.filter(item => {
    if (item.category == category) {
      return item;
    }
  })
  res.send(matchedCategories)
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
  //Each item detail
  .get('/items/:id', handleItemId)
  //Category 
  .get('/category/:category', handleCategory)


  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
