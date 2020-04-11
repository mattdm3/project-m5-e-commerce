import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// ------------- COMPONENTS -------------
import GlobalStyles from '../GlobalStyles';
import Navbar from '../Navbar';
// <<<<<<< cart
// import ItemGrid from '../ItemGrid';
// =======
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ItemGrid from '../ItemGrid/ItemGrid';
// >>>>>>> master
import Item from "../Item"
import Sidebar from '../Sidebar/Sidebar';
import Category from '../Category/Category';
import Sellers from '../Sellers/Sellers';
//---------------------------------------

function App() {


  return (


    <>

      <Router>
        <GlobalStyles />
        <Navbar />
        {/* <Sidebar></Sidebar> */}
        <Switch>
          <Route exact path="/">
            <ItemGrid></ItemGrid>
          </Route>
          <Route exact path="/item/:id">
            <Item></Item>
          </Route>
          <Route exact path="/category/:category">
            <Category></Category>
          </Route>
          <Route exact path="/sellers/:companyId">
            <Sellers></Sellers>
          </Route>
        </Switch>

      </Router>

    </>

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

