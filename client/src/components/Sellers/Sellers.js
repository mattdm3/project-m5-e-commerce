import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom"
import styled from 'styled-components';
import RenderItem from '../ItemGrid/RenderItem';

const Sellers = () => {

    //state will hold the company info
    const [companyState, setCompanyState] = useState(null)
    //Get the comapny - ID from the URL
    const { companyId } = useParams();

    console.log(companyState)


    //as soon as this company gets rendered. Will do a fetch
    useEffect(() => {
        fetch(`/sellers/${companyId}`)
            .then(res => res.json())
            .then(companyData => setCompanyState(companyData))
            .catch(() => window.alert('Error occured finding the company. '))
    }, [])


    return (<Wrapper> {companyState !== null ?

        <div>
            <Header>
                <div>
                    <StyledCompanyName>{companyState.info.name}</StyledCompanyName>
                    <a href={companyState.info.url}>{companyState.info.url}</a>
                    <div>{companyState.info.country}</div>
                    <Products>Our Products</Products>
                </div>
            </Header>
            {/* all items */}
            <GridSellerWrapper>

                {companyState.items.map(item => {
                    return (
                        <Link to={`/item/${item.id}`}>
                            <RenderItem item={item}></RenderItem>
                        </Link>
                    )
                })}
            </GridSellerWrapper>

        </div>
        : <div>Loading...</div>}
    </Wrapper>
    )


}

export default Sellers;


const Wrapper = styled.div`
`

const GridSellerWrapper = styled.div`
    display: grid;

    /* each take up their own fractional unit */
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    /* grid-template-rows: repeat(3, 1fr); */
    grid-column-gap: 30px;
    grid-row-gap: 30px;

    a {
        color: black;
    }
`

const Header = styled.div`
display: flex;
justify-content: center;
text-align: center;

a {
    color: black;
    cursor: pointer;
}

`

const StyledCompanyName = styled.h1`
font-size: 6em;

`

const Products = styled.h2`
font-size: 3em;
`