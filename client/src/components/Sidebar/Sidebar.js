import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import { useSelector } from 'react-redux';




const categories = [
    'Fitness',
    'Medical',
    'Lifestyle',
    'Entertainment',
    'Industrial',
    'Pets and Animals',
    'Gaming'
]
const bodyLocation = [
    'Head',
    'Neck',
    'Chest',
    'Arms',
    'Wrist',
    'Waist',
    'Hands',
    'Feet'
]

const Sidebar = () => {

    const allDataFetchSuccess = useSelector(items => items.dataItems.status);


    return (
        <SidebarContainer>


            {/* {allDataFetchSuccess === 'success' && <Search></Search>} */}
            {/* <StyledForm>
                <StyledInput placeholder="Search Products..." />
            </StyledForm> */}

            <PriceSortContainer>
                <SidebarHeading>Filter By Price</SidebarHeading>
                <SidebarBody>$ 0-100</SidebarBody>
                <SidebarBody>$ 101-500</SidebarBody>
                <SidebarBody>$ 501-1000</SidebarBody>
            </PriceSortContainer>
            <CategoriesContainer>
                <SidebarHeading>PRODUCT CATEGORIES</SidebarHeading>
                {categories.map(category => {
                    return (

                        <NavigationLink exact to={`/category/${category}`} activeStyle={{ color: "#164C81", fontWeight: "600" }} ><SidebarBody>{category}</SidebarBody></NavigationLink>
                    )
                })}
                <NavigationLink exact to="/"><SidebarBody>All Items</SidebarBody></NavigationLink>
            </CategoriesContainer>
            <CategoriesContainer>
                <SidebarHeading>Body Locations</SidebarHeading>
                {bodyLocation.map(bodyPart => {
                    return (

                        <NavigationLink exact to={`/bodypart/${bodyPart}`} activeStyle={{ color: "#164C81", fontWeight: "600" }} ><SidebarBody>{bodyPart}</SidebarBody></NavigationLink>
                    )
                })}
            </CategoriesContainer>


        </SidebarContainer>
    )
}

//--------------------------------- STYLES ---------------------------------



const PriceSortContainer = styled.div`
    display: flex;
    flex-direction: column;

`

const SidebarBody = styled.p`
        /* padding: 0;  */
        margin: 5px 0;
        font-size: .9rem;

        &:hover {
            opacity: .7;
        }

`

// >>>>>>> master
const NavigationLink = styled(NavLink)`
    text-decoration: none;
    color: black;
`




const SidebarHeading = styled.h3`
    font-size: .9rem;
    margin: 15px 0;
    font-weight: 600;
    text-transform: uppercase;
`

const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`

const StyledForm = styled.form`
    position: relative;
    margin-bottom: 80px;

    button {
        border: none;
        background: none;
        font-size: 1rem;
        position: absolute;
        right: 5px;
        top: 11px;
    }
`

const StyledInput = styled.input`
    width: 100%;
    height: 45px;
    font-size: .9rem;
    border: none;
    background: #EEEEEE;
    padding: 0 5px;

`


const SidebarContainer = styled.div`
    margin-top: 30px;
    width: 25%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`



export default Sidebar;
