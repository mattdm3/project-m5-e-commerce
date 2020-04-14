import React from "react";
import styled from 'styled-components';
import industrial from '../../images/stock/industria-image 1.png';
import medical from '../../images/stock/medical-img 1.png';


const CategoryGrid = () => {
    return (
        <Parent>
            <Industrial></Industrial>
            <Entertainment></Entertainment>
            <Lifestyle></Lifestyle>
            <Medical></Medical>
            <Fitness></Fitness>
            <Gaming></Gaming>

        </Parent>
    )
}

const Parent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 25px;
    grid-row-gap: 25px;
`

const Industrial = styled.div`
    grid-area: 2 / 1 / 4 / 2;
    background: url(${industrial});
`
const Entertainment = styled.div`
    grid-area: 1 / 2 / 3 / 3;
`

const Lifestyle = styled.div`
    grid-area: 1 / 2 / 3 / 3;
`

const Medical = styled.div`
    grid-area: 1 / 3 / 2 / 5;
`

const Fitness = styled.div`
    grid-area: 3 / 2 / 4 / 4;
`

const Gaming = styled.div`
    grid-area: 2 / 4 / 4 / 5;

`


// 'Fitness',
// 'Medical',
// 'Lifestyle',
// 'Entertainment',
// 'Industrial',
// 'Pets and Animals',
// 'Gaming'





export default CategoryGrid; 