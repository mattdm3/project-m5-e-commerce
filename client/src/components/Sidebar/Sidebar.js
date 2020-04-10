import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";


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
                    <Link to={`/category/${category}`}><div>{category}</div></Link>
                )
            })}

        </div>
    )
}

export default Sidebar;