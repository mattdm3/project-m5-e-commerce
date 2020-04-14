import React, { useState } from "react";
import styled from "styled-components";
// import { ShareIcons } from "./ShareIcons"
import { FaDiceSix } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi'
import { FiSearch } from 'react-icons/fi'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import { useSelector } from 'react-redux';

// ------------- COMPONENTS -------------
import Cart from "../Cart";
import Contact from "./Contact";
import Seller from "./Seller";
import { PageContainer } from "../CONSTANTS";
//---------------------------------------


const Navbar = () => {
    const cartCounter = useSelector(state => state.cartState.cartCounter);
    let history = useHistory();

    const [navbar, setNavbar] = useState(false);

    const [triggerSearchBar, setTriggerSearchBar] = useState(false);

    function toggleNavbar() {

        if (navbar) {
            setNavbar(false)
        } else if (!navbar) {
            setNavbar(true)
        }

    }

    const toggleSearchBar = () => {

        if (triggerSearchBar) {
            setTriggerSearchBar(false)
        } else if (!triggerSearchBar) {
            setTriggerSearchBar(true)
        }
    }

    console.log(triggerSearchBar)


    return (



        <PageContainer>
            <StyledNav>
                <NavigationLink exact to="/">
                    <Logo onClick={() => history.push('/')} >
                        <FaDiceSix size={20} style={{ marginRight: "5px", color: "#164C81" }} />
                        <h3>Six Tech Gear</h3>
                    </Logo>
                </NavigationLink>

                <HiddenNavigation style={(navbar) ? { transform: "translateX(-80vw)" } : {
                    transform: "translateX(-200vw)"
                }}>
                    <OverlayMenu>
                        <Link onClick={toggleNavbar} to="/shop"><li>Shop</li></Link>
                        <Link to="/projects"><li>Sellers</li></Link>
                        <Link to="/services"><li>Cart</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                    </OverlayMenu>

                </HiddenNavigation>


                <StyledUl >
                    <NavList>
                        <NavigationLink style={(triggerSearchBar) ? { opacity: "0" } : { opacity: "1" }} exact to="/shop">Shop</NavigationLink>
                    </NavList>
                    <NavList>
                        <NavigationLink style={(triggerSearchBar) ? { opacity: "0" } : { opacity: "1" }} exact to="/sellers">Sellers</NavigationLink>
                    </NavList>
                    <NavList>
                        <NavigationLink style={(triggerSearchBar) ? { opacity: "0" } : { opacity: "1" }} exact to="/cart"><FiShoppingCart /> {cartCounter}</NavigationLink>
                    </NavList>
                    <NavList >
                        <FiSearch onClick={toggleSearchBar} style={{ fontSize: "1.2rem" }} />
                    </NavList>
                    {/* <NavList>
                        <NavigationLink exact to="/contact">Contact</NavigationLink>
                    </NavList> */}
                </StyledUl>
                <Hamburger onClick={toggleNavbar}>&#9776;</Hamburger>
                <SearchInput placeholder="Search our products..." style={(triggerSearchBar) ? { opacity: "1", transition: "all 1s ease-in-out", width: "500px", zIndex: "10" } : { width: "0", opacity: "0", zIndex: "-10", transition: "all 500ms ease-in-out" }} />
            </StyledNav>
        </PageContainer>


    )
}

//--------------------------------- STYLES ---------------------------------

const NavigationLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-weight: 600; 
    transition-duration: 400ms; 
`

const SearchInput = styled.input`
    position: absolute; 
    right: 38px; 
    background: #EEEEEE; 
    border: 1px solid #DEDEDE; 
    border-style: solid; 
    font-size: .9rem;
    animation-duration: 400ms; 
    padding: 0 5px; 

    height: 35px; 
    top: 45px; 

    &:focus {
        outline: none;
    }

`

const Logo = styled.div`
display: flex;
align-items: center;
padding-bottom: 10px;

h3 {
font-weight: 700;

}

`
//Maybe use  styled.nav  instead
const StyledNav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 50px 0;
    transition-duration: .4s;
    position: relative; 

`

const HiddenNavigation = styled.div`
    position: fixed; 
    width: 100%;
    height: 100vh; 
    transition-duration: .7s;
    top: 0; 
    z-index: 100; 
    background-color: #007C89;
    

`

const OverlayMenu = styled.ul`
    display: flex; 
    align-items: flex-end;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0; 
    background-color: #333333;
    color: white; 
    margin: 0; 
    padding: 0;
    width: 100%;
    height: 100vh; 
    z-index: 100; 
    font-size: 1.2rem;
    /* opacity: .9; */


    li {
        list-style: none;
        font-weight: 700;
        color: white; 
    
        margin: 5px 0; 
        padding: 15px; 
        cursor: pointer;
        border-bottom: 3px solid transparent;

        &:hover {
        border-bottom: 3px solid #164C81;
        }
    }

`

const StyledUl = styled.ul`
    display: flex;
    justify-content: space-evenly;
    display: none;
    padding-inline-start: 0;
    transition-duration: 400ms; 


    @media screen and (min-width: 768px) {
                    display: flex;
    }
    @media screen and (min-width: 992px) {
                    display: flex;
    }

`

const Hamburger = styled.h2`
    position: fixed;
    right: 0;
    top: 0;
    padding-right: 8rem;
    padding-top: 50px;

    margin: 0;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        display: none;
    }
`

const NavList = styled.li`
    list-style: none;
    padding: 0 10px;
    padding-bottom:10px;
    margin: 0 10px; 
    cursor: pointer;
    transition-duration: 400ms; 
    border-bottom: 3px solid transparent;

    :last-of-type {
        margin-right: 0; 
    }

    &:hover {
        border-bottom: 3px solid #164C81;
    }
`

const ContentContainer = styled.div`

`

export default Navbar;