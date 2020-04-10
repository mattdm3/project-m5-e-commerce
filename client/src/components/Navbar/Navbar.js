import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom"
// import { ShareIcons } from "./ShareIcons"
import { FaDiceSix } from 'react-icons/fa'


const Navbar = () => {

    return (
        <>
            <StyledNav>
                <Link to="/">
                    <Logo>
                        <FaDiceSix size={20} style={{ marginRight: "5px", color: "#FF4F40" }} />
                        <h3> Six Tech Gear</h3>
                    </Logo>
                </Link>
                <StyledUl>
                    <Link to="/"><NavList>Shop</NavList></Link>
                    <Link to="/"><NavList>Sellers</NavList></Link>
                    <Link to="/"><NavList>Cart</NavList></Link>
                    <Link to="/"><NavList>Contact</NavList></Link>
                </StyledUl>
                <Hamburger>&#9776;</Hamburger>
            </StyledNav>

        </>
    )
}

const Link = styled.a`

`

const Logo = styled.div`
display: flex; 
align-items: center;
padding-bottom: 10px; 

h3 {
    font-weight: 700; 
    
    
    
}

`

const StyledNav = styled.div`
    display: flex; 
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 50px 50px;
    /* position: fixed;  */
    background: #FAFAFA;
    transition-duration: .4s;

    /* h4, h3 {
        padding: 0 40px; 
    } */

    /* @media screen and (min-width: 768px) {
        padding: 15px 0; 
    }
    @media screen and (min-width: 992px) {
        padding: 15px 0; 
    } */


`


const StyledUl = styled.ul`
    /* padding: 0 40px; */
    display: flex; 
    justify-content: space-evenly;
    display: none;
    padding-inline-start: 0; 


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
    padding-right: 50px; 
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
    /* margin: 0 10px;  */
    cursor: pointer;
    border-bottom: 3px solid transparent;

    &:hover {
        border-bottom: 3px solid #FF4F40;
    }
`
export default Navbar;