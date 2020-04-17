import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocation, Link, useHistory } from 'react-router-dom';





const Search = ({ triggerSearchBar }) => {
    const allData = useSelector(items => items.dataItems.allItems)
    const [query, setQuery] = useState(null)
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
            //grab the actual category for the ur - ex: Fitness.
            let categoryName = location[2];
            //filter data and return only those items.
            let filteredCategoryItems = allData.filter(item => {
                if (categoryName == item.category) {
                    return item;
                }
            })
            //now the search will only work for those items. 
            let matchedResults = filteredCategoryItems.filter(item => {
                if (item.name.toLowerCase().includes(type.toLowerCase()) && type.length > 3) {
                    return item
                }
            })
            setResults(matchedResults)
        }
        //if if anything but the category - you are searching for all keywords. 
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

    return (<StyledForm action={`/searching/${type}`}
        style={(triggerSearchBar) ?
            {
                opacity: "1",
                transition: "all 1s ease-in-out",
                width: "500px",
                zIndex: "10"
            }
            :
            {
                display: 'none',
                opacity: "0",
                zIndex: "-10",
                transition: "all 500ms ease-in-out"
            }}>

        <StyledInput onChange={(e) => setTyped(e.target.value)}
            placeholder='Search Products...' ></StyledInput>
        <Link to={`/searching/${type}`}><button type="button" onClick={() => setQuery(type)}>Go</button></Link>

        {results !== null && <div>
            {results.map(result => {

                let getIndex = result.name.toLowerCase().indexOf(type.toLowerCase())
                let word = result.name.split('');
                let typeLength = type.split('').length;
                let firstHalf = word.slice(0, getIndex);
                let bolded = word.slice(getIndex, typeLength + getIndex)
                let secondHalf = word.slice(typeLength + getIndex, word.length)
                console.log(firstHalf)
                console.log(bolded)
                console.log(secondHalf)

                return (
                    <div>
                        <ul>
                            <EachList onClick={() => handlePushItem(result.id)}>
                                {firstHalf}
                                <Strong>{bolded}</Strong>
                                {secondHalf}
                            </EachList>
                        </ul>
                    </div>
                )
            })}
        </div>}
    </StyledForm>)

}

export default Search;

const StyledForm = styled.form`
   display: inline;
    margin-bottom: 80px; 
    width: 300px;
    height: 200px;
  overflow-y: scroll;

    
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

const Strong = styled.strong`
font-weight: bolder;

` 