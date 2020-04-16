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
  requestAllCompanies,
  receiveAllCompanies,
  receiveAllCompaniesError,
} from '../../actions';
import Chatbot from '../ChatBot/Chatbot';
import BodyPart from '../Bodypart/BodyPart';
import Home from '../Home';
import Footer from '../Footer';


function App() {

  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cartState);
  const userLoggedIn = useSelector(state => state.userReducer)



  //Fetch ALL data. 
  useEffect(() => {
    dispatch(requestAllDataFromDataBase())
    fetch('/allItemData')
      .then(res => res.json())
      .then(data => dispatch(receiveAllDataFromDataBase(data)))
      .catch(() => dispatch(receiveAllDataFromDataBaseError()))

  }, [])
  //

  //Fetch the companies
  // useEffect(() => {
  //   dispatch(requestAllCompanies())
  //   fetch('/sellers')
  //     .then(res => res.json())
  //     .then(data => dispatch(receiveAllCompanies(data)))
  //     .catch(() => dispatch(receiveAllCompaniesError()))
  // }, [])

  //at App -top lvl componenet - as he purchases, updated it in the backend ?
  //is there a better way to do this?
  useEffect(() => {
    //most likely need a state for ONLY PURCHASED ITEMS - BOUGHT ITEMS

    if (userLoggedIn.status === "authenticated") {

      const handleCartItemsForUser = async () => {

        let response = await fetch(`/storeCartItemsUser/${userLoggedIn.user.name}`, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify(cartState)
        })
        //to ensure
        let received = response.json();
        console.log(received)
      }
      handleCartItemsForUser();

    }


  }, [cartState])



  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Chatbot></Chatbot>

        {/* <Sidebar></Sidebar> */}
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path="/shop">
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
          <Route exact path="/bodypart/:body">
            <BodyPart></BodyPart>
          </Route>
        </Switch>

        <Footer />

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

