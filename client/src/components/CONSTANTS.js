import styled from 'styled-components';


export const SideAndGrid = styled.div`
    display: flex; 
    
    /* padding: 0 100px;  */
    /* margin: 0 150px;  */
    margin-top: 100px; 
    justify-content: space-between;
    /* width: 100%;   */
    border-top: 2px solid #EEEEEE; 

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
        text-decoration: none;
    }
`

export const PageContainer = styled.div`
    /* padding: 0 8rem;  */
    width: 80%; 
    margin-left: auto; 
    margin-right: auto; 
    position: relative; 
`


export const StyledStock = styled.span`
background-color: rgb(22,76,129);
color: white;
border-radius: 50%;
font-size: 10px;
line-height: 1.4;
width: 40px;
padding: 5px;
position: relative;
bottom: 120px;

display: inline-block;
z-index: 20;

`