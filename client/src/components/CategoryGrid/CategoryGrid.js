import React from "react";
import styled from 'styled-components';
import { PageContainer } from '../CONSTANTS'
import industrial from '../../images/stock/industrial-image.png';
import medical from '../../images/stock/medical-img.png';
import gaming from '../../images/stock/gaming-logo.png';
import entertainment from '../../images/stock/entertain-image2.png';
import fitness from '../../images/stock/fitness-image.png';
import lifestyle from '../../images/stock/lifestyle-logo.png';
import pet from '../../images/stock/pet-image.png'


const CategoryGrid = () => {
    return (
        <PageContainer>
            <Parent>
                <Industrial style={{ backgroundImage: `url(${industrial})` }}>
                    <p>Industrial</p>
                </Industrial>
                <Entertainment style={{ backgroundImage: `url(${entertainment})` }}>
                    <p>Entertainment</p>
                </Entertainment>
                <Lifestyle style={{ backgroundImage: `url(${lifestyle})` }}>
                    <p>Lifestyle</p>
                </Lifestyle>
                <Medical style={{ backgroundImage: `url(${medical})` }}>
                    <p>Medical</p>
                </Medical>
                <Fitness style={{ backgroundImage: `url(${fitness})` }}>
                    <p>Fitness</p>
                </Fitness>
                <Pet style={{ backgroundImage: `url(${pet})` }}>
                    <p>Pets</p>
                </Pet>

                <Gaming style={{ backgroundImage: `url(${gaming})` }}>
                    <p>Gaming</p>
                </Gaming>


            </Parent>

        </PageContainer>

    )
}


const Parent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    max-height: 500px; 
    min-height: 900px; 

    div {
        transition-duration: 600ms; 
        cursor: pointer; 
        position: relative;
        opacity: .9;
        filter: grayscale(30%);
    }

    div:hover {
        transform: scale(1.05);
        opacity: 1; 
        filter: grayscale(0);

    }

    p {
        position: absolute; 
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        /* background: rgba(22, 76, 129, .5); */
        color: white; 
        padding: 20px 20px; 
        font-size: 1.8rem;
        font-weight: 600; 
    }

    @media screen and (max-width: 1000px) {

    display: flex; 
    flex-wrap: wrap; 
    justify-content: center; 

    div {
        width: 100%; 
        height: 250px; 
        margin: 10px 0; 
    }

}

`



const Industrial = styled.div`
    grid-area: 2 / 1 / 4 / 2;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; 
`

const Entertainment = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    background-repeat: no-repeat; 
    background-size: cover;

  
`

const Lifestyle = styled.div`
    grid-area: 1 / 2 / 3 / 3;
    background-repeat: no-repeat; 
    background-size: cover;

    @media screen and (max-width: 1000px) {
        background-position: 0 -130px; 
    }

   
`

const Medical = styled.div`
    grid-area: 1 / 3 / 2 / 5;
    background-size: cover;
    background-repeat: no-repeat; 

   
`

const Fitness = styled.div`
    grid-area: 3 / 2 / 4 / 4;
    background-position: center; 
    background-size: cover;
    background-repeat: no-repeat;

  
`

const Pet = styled.div`
    grid-area: 2 / 3 / 3 / 4;
    background-repeat: no-repeat; 
    background-size: cover;

`

const Gaming = styled.div`
    grid-area: 2 / 4 / 4 / 5;
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: center;

   

`


// 'Fitness',
// 'Medical',
// 'Lifestyle',
// 'Entertainment',
// 'Industrial',
// 'Pets and Animals',
// 'Gaming'





export default CategoryGrid; 