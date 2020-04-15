import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import { useSelector, useDispatch } from 'react-redux';
import {
    receiveAllDataFromDataBase,
    requestAllDataFromDataBase,
    receiveAllDataFromDataBaseError,
    requestAllCompanies,
    receiveAllCompanies,
    receiveAllCompaniesError,
} from '../../actions';



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

    const dispatch = useDispatch();

    const allDataFetchSuccess = useSelector(items => items.dataItems.status);

    const { allCompanies } = useSelector(state => state.companiesReducer)
    const { status } = useSelector(state => state.companiesReducer)

    const [companyList, setCompanyList] = useState(null);

    if (status === "success") {
        console.log(status)
    }



    const handleSelect = (e) => {
        const target = e.target.value;
        console.log(companyList)
        const companyObj = companyList.filter(company => company.name === target);
        console.log(companyObj[0].id)
        window.location = `/sellers/${companyObj[0].id}`


    }

    // React.useEffect(() => {
    //     dispatch(requestAllCompanies())
    //     fetch('/sellers')
    //         .then(res => res.json())
    //         .then(data => dispatch(receiveAllCompanies(data)))
    //         .catch(() => dispatch(receiveAllCompaniesError()))
    // }, [])

    React.useEffect(() => {
        fetch('/sellers')
            .then(res => res.json())
            .then(data => setCompanyList(data))
            .catch((err) => console.log(err))
    }, [])


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
                <SidebarHeading>Filter by Company</SidebarHeading>

                {/* <select onChange={handleSelect}>
                    {allCompanies != null ? allCompanies.map((company) => (
                        <>
                            <option value="" disabled="disabled" selected="selected">All</option>
                            <option value={company.name}>{company.name}</option>
                        </>
                    )
                    )
                        :
                        <option value="" disabled="disabled" selected="selected">LOADING</option>
                    }
                </select> */}

                {/* {allCompanies ? <h1>Sucess</h1> : <h1>FAIL</h1>} */}


                <select onChange={handleSelect}>
                    <option onchange={handleSelect} value="" disabled="disabled" selected="selected">All</option>
                    {companyList && companyList.map(company => (
                        <option onchange={handleSelect} value={company.name}>{company.name}</option>
                    )

                    )}
                </select>

            </CategoriesContainer>
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


        </SidebarContainer >
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
