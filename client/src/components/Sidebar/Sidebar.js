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

const Sidebar = () => {

    const allDataFetchSuccess = useSelector(items => items.dataItems.status)

    return (
        <SidebarContainer>
            {/* Search Bar */}
            {allDataFetchSuccess === 'success' && <Search></Search>}

            {categories.map(category => {
                return (
                    <NavigationLink to={`/category/${category}`}><div>{category}</div></NavigationLink>
                )
            })}

        </SidebarContainer>
    )
}

//--------------------------------- STYLES ---------------------------------
const NavigationLink = styled(NavLink)` 
    text-decoration: none;
    color: black;
`

const SidebarContainer = styled.div`
    width: 25%; 

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`



export default Sidebar;
