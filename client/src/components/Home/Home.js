import React from 'react';
import styled from 'styled-components';
import CategoryGrid from '../CategoryGrid';
import FeaturedProducts from '../FeaturedProducts';
import { PageContainer } from '../CONSTANTS'

const Home = () => {
    return (
        <PageContainer>
            <div>
                <CategoryGrid />
                <FeaturedProducts />
            </div>

        </PageContainer>
    )
}




export default Home; 