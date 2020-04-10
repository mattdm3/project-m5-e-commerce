import React, { useState, useEffect } from 'react';
import GlobalStyles from '../GlobalStyles';
import Navbar from '../Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemGrid from '../ItemGrid';
import Item from "../Item"

function App() {


  return (

    <>

      <Router>
        <GlobalStyles />
        <Navbar />

        <Switch>
          <Route exact path="/">
            <ItemGrid />
          </Route>

          <Route exact path="/item/:id">
            <Item />
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

