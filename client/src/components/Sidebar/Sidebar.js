import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';


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
        <div>
            {categories.map(category => {
                return (
                    <NavigationLink to={`/category/${category}`}><div>{category}</div></NavigationLink>
                )
            })}

        </div>
    )
}

//--------------------------------- STYLES ---------------------------------

const NavigationLink = styled(NavLink)` 
    text-decoration: none;
    color: black;
`

export default Sidebar;
