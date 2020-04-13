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
import Cart from '../Cart'
import AllSellers from "../AllSellers"
//---------------------------------------
import { useDispatch, useSelector } from 'react-redux';
import {
  receiveAllDataFromDataBase,
  requestAllDataFromDataBase,
  receiveAllDataFromDataBaseError,
} from '../../actions';
import Chatbot from '../ChatBot/Chatbot';


function App() {

  const dispatch = useDispatch();


  //Fetch ALL data. 
  useEffect(() => {
    dispatch(requestAllDataFromDataBase())
    fetch('/allItemData')
      .then(res => res.json())
      .then(data => dispatch(receiveAllDataFromDataBase(data)))
      .catch(() => dispatch(receiveAllDataFromDataBaseError()))

  }, [])



  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Chatbot></Chatbot>

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
          <Route exact path='/sellers'>
            <AllSellers />
          </Route>
          <Route exact path='/cart'>
            <Cart />
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

