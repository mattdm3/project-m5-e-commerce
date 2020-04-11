import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

const AllSellers = () => {

    //state will hold the company info
    const [companyNames, setCompanyNames] = useState(null)


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
                        <Link to='/'>
                            <p>see products</p>
                        </Link>
                    </ContentContainer>


                )

            })}
        </CompanyContainer >
    )
}

const CompanyContainer = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    padding: 0 100px; 
    margin: 50px 45px; 
    text-align: center; 



    a {
        margin: 5px 45px; 
        text-transform: uppercase; 
        text-decoration: none; 
        color: #333333;
        font-size: 1.8rem; 
        opacity: .6; 
        font-weight: 700; 
        
        font-family: "Roboto";

        
    }
    p{ 
        margin: 0; 
        padding: 0; 
    }



`

const ContentContainer = styled.div`
    opacity: .7; 
    transition-duration: 500ms;     
    margin-bottom: 20px; 

    &:hover {
            opacity: 1; 
            transform: scale(1.1); 

        }
`

export default AllSellers; 