const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
//data file for items
const items = require('./data/items.json');
const { handleItemId, handleItemsData,
  handleCategory, handleCompany, handleSellers,
  handleAllData, handleRelatedItems, handleBodyItems,
  handleSignUp, handleLogin, handleCartItemsForUser, handleUpdateStock, handleSearch
} = require('./handlers');



// const PORT = process.env.port || 4000;

/*items.forEach((element, index) => {

    if (index < 20) {
      console.log(" testing for each", element.price)    }

  });*/




var app = express()
app.use(function (req, res, next) {
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
app.use(morgan('tiny'))
app.use(express.static('./server/assets'))
app.use(bodyParser.json())
// app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', express.static(__dirname + '/'))

// ALSO ADDED HEROKU
app.use(express.static(path.join(__dirname, 'build')));




//Item Data endpoint
app.get('/items', handleItemsData)
//Each item detail
app.get('/items/:id', handleItemId)
//Category 
app.get('/category/:category', handleCategory)
//Selected Company
app.get('/sellers/:companyId', handleCompany)
//list of sellers
app.get('/sellers', handleSellers)
//all data
app.get('/allItemData', handleAllData)
//  get related items
app.get('/relatedItems/:category', handleRelatedItems)
//
app.get('/bodypart/:body', handleBodyItems)
//post sign up info
app.post('/SignUp', handleSignUp)
//get login credentials
app.post('/Login', handleLogin)
//store cart items.
app.post('/storeCartItemsUser/:user', handleCartItemsForUser)

app.get('/search', handleSearch)

app.get('/bodypart/:body', handleBodyItems)
//
app.post('/updateStock', handleUpdateStock)


//  ADDED FOR HEROKU DEPLOYMENT

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 

// app.listen(PORT, () => console.info(`Listening on port ${PORT}`));

