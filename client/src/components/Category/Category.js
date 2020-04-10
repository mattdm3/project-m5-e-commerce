import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"



const Category = () => {

    //state will hold list of the current categories items.
    const [categoryState, setCategoryState] = useState(null);


    // grab category from the url
    const { category } = useParams();


    useEffect(() => {

        //hit endpoint and will return all Objects within that category.
        fetch(`/category/${category}`)
            .then(res => res.json())
            .then(data => console.log(data))
        //on change of the category params, this will re-fetch. 
        //once fetch is done --> Dispatch ?
        //try to reuse ItemGrid component?
    }, [category])

    return (
        <div>
            {category}

        </div>
    )

}

export default Category;