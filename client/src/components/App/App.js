import React, { useState, useEffect } from 'react';
// <<<<<<< Routes-Redux
import styled from 'styled-components';

// // ------------- COMPONENTS -------------
import Navbar from '../HomePage/Navbar'
import ItemGrid from '../HomePage/ItemGrid'
// //---------------------------------------
// =======
import GlobalStyles from '../GlobalStyles';
import Navbar from '../Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemGrid from '../ItemGrid';
import Item from "../Item"
import Sidebar from '../Sidebar/Sidebar';
import Category from '../Category/Category';
// >>>>>>> master

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
// >>>>>>> master
  )
}

//--------------------------------- STYLES ---------------------------------

const StyledContainer = styled.div`
    margin: 0 ;
    padding: 0; 
    
`

export default App;


// /item/companies/:companyId
// item/companies
// item/:id

