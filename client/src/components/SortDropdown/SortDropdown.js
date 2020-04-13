import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";


const options = [
    {
        label: 'Best Match',
        key: 'bestMatch'
    },
    {
        label: 'Price (High to Low)',
        key: 'highToLow'
    },
    {
        label: 'Price (Low to High)',
        key: 'lowToHigh'
    },


]

const SortDropdown = ({ exportFilter }) => {

    let [filter, setFilter] = useState(options[0])
    console.log("filter in SortDropdown", filter.key)

    const handleFilterSelect = (selection) => {

        setFilter(selection)
        exportFilter(selection)
        console.log("handleFilterSelect fired in SortDropdown", selection)
    }

    return (
        <Dropdown>
            <button class="dropbtn">Sort By: {filter.label}</button>
            <DropdownContent>
                {options.map(option => {
                    return (

                        <SortOption onClick={() => handleFilterSelect(option)}><div>{option.label}</div></SortOption>

                    )
                })}
            </DropdownContent>
        </Dropdown>
    )

}


const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`;

const Dropdown = styled.div`
    position: relative;
    display: inline-block;

    &:hover ${DropdownContent} {
        display: block;
      }
    `;


const SortOption = styled.div`
   

    &:hover  {
        cursor: pointer;
        background-color: #e3e1e1;
      }
    `;





export default SortDropdown;
