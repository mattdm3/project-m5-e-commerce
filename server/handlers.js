
const items = require('./data/items.json');
const companies = require('./data/companies.json');



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

    let page = parseInt(req.query.page); //1
    let limit = parseInt(req.query.limit); //9
    let firstIndex = (page - 1) * limit; //0
    let endIndex = (limit * page);//9
    let slicedItems = items.slice(firstIndex, endIndex);

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
    res.status(200).send(filteredCompany)
}

const handleSellers = (req, res) => {
    // const arrayOfnames = [];
    // companies.forEach(company => arrayOfnames.push(company.name))

    // res.send(arrayOfnames);

    res.send(companies);
}



module.exports = { handleCompany, handleItemId, handleCategory, handleItemsData, handleSellers };