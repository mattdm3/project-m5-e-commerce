import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Category from "../Category/Category";


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

    let [categoryState, setCategoryState] = useState(null);


    return (
        <SidebarContainer>
            <StyledForm>
                <StyledInput placeholder="Search Products..." />
                <button>Go</button>
            </StyledForm>
            <CategoriesContainer>
                {categories.map(category => {
                    return (

                        <NavLink exact to={`/category/${category}`}><div>{category}</div></NavLink>
                    )
                })}
            </CategoriesContainer>

        </SidebarContainer>
    )
}

//--------------------------------- STYLES ---------------------------------

const NavigationLink = styled(NavLink)` 
    text-decoration: none;
    color: black;
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
    width: 25%; 

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`



export default Sidebar;
