import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocation, Link, useHistory } from 'react-router-dom';





const Search = () => {
    const allData = useSelector(items => items.dataItems.allItems)
    const [type, setTyped] = useState(' ')
    const [results, setResults] = useState(null)
    const [categoryData, setCategoryData] = useState(null)
    //will grab the url of the category. 
    let location = useLocation().pathname.split('/')
    let history = useHistory();

    console.log(location.length)


    //need to search based on category. 
    useEffect(() => {

        //on any Category endpoint
        if (location[1] === "category") {
            let categoryName = location[2];
            let filteredCategoryItems = allData.filter(item => {
                if (categoryName == item.category) {
                    return item;
                }
            })
            let matchedResults = filteredCategoryItems.filter(item => {
                if (item.name.toLowerCase().includes(type.toLowerCase()) && type.length > 3) {
                    return item
                }
            })
            setResults(matchedResults)
        }
        //on the '/' endpoint - this endpoint will always have a length of 2.
        else {
            let matchedResults = allData.filter(item => {
                if (item.name.toLowerCase().includes(type.toLowerCase()) && type.length > 3) {
                    return item
                }
            })
            setResults(matchedResults)

        }

    }, [type])

    const handlePushItem = (id) => {
        history.push(`/item/${id}`)
        setTyped('')


    }

    return (<StyledForm>
        <StyledInput onChange={(e) => setTyped(e.target.value)}
            placeholder='Search Products...' />
        <button>Go</button>
        {results !== null && <div>
            {results.map(result => {
                return (
                    <ul>
                        <EachList onClick={() => handlePushItem(result.id)}>
                            {result.name}
                        </EachList>
                    </ul>
                )
            })}
        </div>}
    </StyledForm >)

}

export default Search;

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

const EachList = styled.li`
cursor: pointer;
&:hover {
    background-color: pink;
}
`