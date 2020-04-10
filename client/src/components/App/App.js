import React, { useState, useEffect } from 'react';
import GlobalStyles from '../GlobalStyles';
import Navbar from '../Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemGrid from '../ItemGrid';
import Item from "../Item"
import Sidebar from '../Sidebar/Sidebar';
import Category from '../Category/Category';

function App() {


  return (

    <>

      <Router>
        <GlobalStyles />
        <Navbar />
        <Sidebar></Sidebar>

        <Switch>
          <Route exact path="/">
            <ItemGrid />
          </Route>
          <Route exact path="/item/:id">
            <Item />
          </Route>
          <Route exact path="/category/:category">
            <Category></Category>
          </Route>
        </Switch>

      </Router>

    </>
  )
}
export default App;


// /item/companies/:companyId
// item/companies
// item/:id

