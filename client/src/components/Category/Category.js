import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"



const Category = () => {

    //state will hold list of the current categories items.
    let [pageCount, setPageCounter] = useState(1);
    let [state, setState] = useState(null);
    // grab category from the url
    const { category } = useParams();


    useEffect(() => {
        //hit endpoint and will return all Objects within that category.
        fetch(`/category/${category}?page=${pageCount}&limit=9`)
            .then(res => res.json()
            )
            .then(data => setState(data))
        //on change of the category params, this will re-fetch. 
        //once fetch is done --> Dispatch ?
        //try to reuse ItemGrid component?
    }, [category, pageCount])
    return (<React.Fragment>
        {state !== null && <div>
            {state.map(item => {
                return <img src={item.imageSrc}></img>
            })}
        </div>
        }
        <button onClick={() => setPageCounter(pageCount += 1)}>
            Next page
                      </button>
        <button onClick={() => setPageCounter(pageCount -= 1)}>
            Previous
                      </button>
    </React.Fragment>

    )

}

export default Category;