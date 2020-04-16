

//THIS IS A COPY!!!
const items = require('./data/items.json');
const companies = require('./data/companies.json');
const users = require('./data/users.json');

const handleAllData = (req, res) => {

    //happens when app render
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


    if (sort === 'lowToHigh') {
        sortItems = items.slice().sort(function (a, b) {

            return parseInt(a.price.replace('$', '').replace(',', '')) - parseInt(b.price.replace('$', '').replace(',', ''))
        });

    }
    else if (sort === 'highToLow') {
        sortItems = items.slice().sort(function (a, b) {
            return parseInt(b.price.replace('$', '').replace(',', '')) - parseInt(a.price.replace('$', '').replace(',', ''))
        })
    } else if (sort === 'bestMatch') {
        sortItems = items;
    }

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

    res.send(companies);
}
// const handleUpdateStock = (req, res) => {
//     let response = req.body;
//     console.log(Object.keys)
//     if (Object.entries(response).length === 0) {
//         return
//     }
//     else {
//         items.forEach(item => {
//             //for each item
//             Object.keys(response).forEach(element => {
//                 //stock levels?
//                 if (element === item.id) {
//                     item.numInStock -= response[element]
//                 }
//                 else {
//                     return
//                 }
//             });
//         });
//     }
// }


const handleBodyItems = (req, res) => {
    let bodypart = req.params.body;

    let filteredBodyItems = items.filter(item => {
        if (item.body_location == bodypart) {
            return item;
        }
    })

    res.status(200).send(filteredBodyItems);

}

const handleSignUp = (req, res) => {
    let userInfo = req.body;

    //if any error getting the user. 
    if (!userInfo) {
        res.status(400).send('Unable to Process Sign Up Request - Bad')
    }
    else {
        let existingUser = users.find(user => {
            if (user.user == userInfo.user) {
                console.log('inside')
                return ('That user already exists!')
            }
        })
        //change this
        //if undefined then there is no user and can proceed with sign up
        if (existingUser == undefined) {
            users.push(userInfo)
            let name = userInfo.user.split('@')[0]
            res.status(200).send({ name })
        }
        else {
            res.status(401).send({ message: 'User already exists' })
        }
    }
}

const handleLogin = (req, res) => {

    let loginInfo = req.body;


    if (!loginInfo) {
        res.status(400).send('Unable to Process Login Request - Bad')
    }
    //meaning there is something in the array of users 
    else if (loginInfo) {
        let getUserInfo = users.find(user => {
            if (user.user === loginInfo.user && user.pass === loginInfo.pass) {
                return (user)
            }
        })
        //if user was found
        if (getUserInfo !== undefined) {
            //send only the Profile Name
            let name = getUserInfo.user.split('@')[0]
            let data = getUserInfo.cart;
            console.log(data, 'this is data')

            res.status(200).send({ name, data })
        } else {
            res.status(404).send('User Not Found')
        }

    }
    //can remove
    else {
        res.status(401).send('Error occured Authenticating')
    }


}

const handleCartItemsForUser = (req, res) => {
    let name = req.params.user; //just the name 
    let notYetPurchasedCartItems = req.body; //array of objects

    console.log(name)
    console.log(notYetPurchasedCartItems)

    //first thing is find the user. 
    let userInfo = users.find(user => {
        if (name == user.user.split('@')[0]) {
            return user
        }
    })
    //user was found
    if (userInfo !== undefined) {
        userInfo.cart = notYetPurchasedCartItems;

    }



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


module.exports = {
    handleSignUp, handleBodyItems, handleRelatedItems,
    handleAllData, handleCompany, handleItemId, handleCategory,
    handleItemsData, handleSellers, handleLogin, handleCartItemsForUser
};
