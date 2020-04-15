import React from 'react';
import styled from 'styled-components';
import CategoryGrid from '../CategoryGrid';
import FeaturedProducts from '../FeaturedProducts';
import { PageContainer, StyledButton } from '../CONSTANTS';
import { Link } from 'react-router-dom';
import Header from '../Header';
import homeImage from '../../images/stock/homepage-slider4.jpg'
import homeImage2 from '../../images/stock/fitness-logo-2.jpg'
import homeImage3 from '../../images/stock/lifestyle-logo-2.jpg'

const Home = () => {
    return (
        <PageContainer>
            <div>
                <StyledHeaderImg style={{ backgroundImage: `url(${homeImage3})` }}>
                    <div>
                        <h1>The All New G-Shock</h1>
                        <Link to='/shop'><HeaderButton>Shop Our Products</HeaderButton></Link>
                    </div>


                </StyledHeaderImg>
                <CategoryGrid />
                <FeaturedProducts />
            </div>

        </PageContainer>
    )
}

const StyledHeaderImg = styled.div`
    background-size: cover; 
    background-repeat: no-repeat; 
    height: 45rem; 
    position: relative; 
    background-position: right; 
    div{
        position: absolute; 
        top: 18rem;
        left: 8rem;  
        position: absolute;
    }


    h1 {
        font-size: 3.5rem;
        font-weight: 800; 
        color: White; 
        
    }
`

const HeaderButton = styled(StyledButton)`
    position: absolute; 
    cursor: pointer;
    font-size: 1rem;
`




export default Home; 