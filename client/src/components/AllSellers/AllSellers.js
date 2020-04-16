import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

// client/src/images/stock/SellerImages/Casio.jpg



const AllSellers = () => {

    //state will hold the company info
    const [companyNames, setCompanyNames] = useState(null)

    console.log(companyNames, 'all sellers!!!')


    //as soon as this company gets rendered. Will do a fetch
    useEffect(() => {
        fetch(`/sellers`)
            .then(res => res.json())
            .then(names => setCompanyNames(names))
            .catch(() => window.alert('Error occured finding the companies'))
    }, [])

    // FIX LINK

    return (
        <CompanyContainer>
            {companyNames && companyNames.map(company => {
                return (
                    <ContentContainer>

                        <a key={company.name} href={company.url} target="_blank">{company.name}</a>
                        <Link to={`/sellers/${company.companyId}`}>
                            <p>see products</p>
                        </Link>
                    </ContentContainer>
                )
            })}
        </CompanyContainer>
    )
}

const CompanyContainer = styled.div`
    display: flex; 
    justify-content: space-between; 
    flex-wrap: wrap; 
    padding: 0 100px; 
    margin: 50px 45px; 
    text-align: center; 
`
const ContentContainer = styled.div`
    opacity: .7; 
    transition-duration: 500ms;     
    margin-bottom: 30px; 
    display: flex; 
    flex-direction: column; 

    a {
        margin: 5px 45px; 
        text-transform: uppercase; 
        text-decoration: none; 
        color: #333333;
        font-size: 1.8rem; 
        opacity: .6; 
        font-weight: 700; 
   
    }
    p{ 
        margin: 0; 
        padding: 0;
        font-size: 1rem; 
        text-align: center;  
    }
    &:hover {
            opacity: 1; 
            transform: scale(1.1); 
        }

    
`

export default AllSellers; 