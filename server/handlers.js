
const items = require('./data/items.json');
const companies = require('./data/companies.json');

const handleAllData = (req, res) => {
    res.status(200).send(items)
}

//handle clicking on a category
const handleCategory = (req, res) => {
    let category = req.params.category;
    let page = req.query.page;
    let limit = req.query.limit;
    if (page >= 0) {
        let matchedCategories = items.filter(item => {
            if (item.category == category) {
                return item;
            }
        })
        //if the array is greater than 9 items...
        if (matchedCategories.length >= 8) {
            let firstIndex = (page - 1) * limit; //0
            let endIndex = (limit * page);//9
            let slicedItems = matchedCategories.slice(firstIndex, endIndex);
            res.send(slicedItems)
        }
        else {
            res.send(matchedCategories)
        }
    }

}
//handle clicking on each item
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


const handleCompany = (req, res) => {
    //grab company ID
    let companyId = req.params.companyId;
    //find associated company and return to the front end.
    let filteredCompany = companies.find(company => {
        if (company.id == companyId) {
            return (company)
        }
    })

    let companyItems = items.filter(item => {
        if (item.companyId == companyId) {
            return item;
        }
    })
    //comment
    let company = {
        info: filteredCompany,
        items: companyItems
    }
    res.status(200).send(company);
}

const handleSellers = (req, res) => {
    // const arrayOfnames = [];
    // companies.forEach(company => arrayOfnames.push(company.name))

    // res.send(arrayOfnames);

    res.send(companies);
}

const handleUpdateStock = (req, res) => {
    console.log('handleUpdateStock', req.body)
}


const handleRelatedItems = (req, res) => {
    let category = req.params.category;
    let filteredCategories = items.filter((item, index) => {
        if (category == item.category) {
            return item
        }
    })
    let reducedItems = filteredCategories.filter((item, index) => {
        if (index < 10) {
            return item
        }
    })
    res.status(200).send(reducedItems)
}


module.exports = { handleAllData, handleCompany, handleItemId, handleCategory, handleItemsData, handleSellers, handleUpdateStock, handleRelatedItems };