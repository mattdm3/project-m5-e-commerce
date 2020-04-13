import styled from 'styled-components';


export const SideAndGrid = styled.div`
    display: flex; 
    margin-top: 120px; 
    padding: 0 100px; 
    justify-content: space-between;
    width: 100%;  

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

`

export const GridContainer = styled.div`
    /* display: flex; */
    /* justify-content: flex-end; */
    /* flex-direction: column;  */
    padding-left: 85px;
    /* margin-top: 120px; */
    /* background: #FAFAFA; */
    width: 100%;

    @media screen and (max-width: 768px) {
        padding-left: 0; 
    }
`


export const GridWrapper = styled.div`
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(150px, 310px)); */
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr) );
    grid-column-gap: 60px;
    grid-row-gap: 10px;

    a {
        color: black;
    }
`