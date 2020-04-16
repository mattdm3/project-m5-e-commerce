import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from "react-router-dom"
import { updateQuantity, removeItem } from "../../actions";


import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../actions';
// import { itemsReducer } from '../../reducers/items-reducer';
import { isInCartSelector } from '../../reducers/cart-reducer';
import { PageContainer, MiddlePage, PageHeadings } from '../CONSTANTS';
import RelatedItems from './RelatedItems';
import ClipLoader from "react-spinners/ClipLoader";


const Item = (props) => {
    const [itemInfo, setItemInfo] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const inCart = useSelector(state => isInCartSelector(state.cartState, itemInfo ? itemInfo.id : undefined));

    const dispatch = useDispatch();

    const { id } = useParams();

    const handleQuantity = (event) => {
        const value = event.target.value;
        if (value > props.numInStock) {
            return
        } else {
            dispatch(updateQuantity(props, parseInt(value)));
        }
    };

    console.log('INSIDE ITEM')

    console.log(itemInfo)

    useEffect(() => {

        const handleItemDetailInfo = async () => {

            let responseId = await fetch(`/items/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
            })
            let idInfo = await responseId.json();
            setItemInfo(idInfo)
            setLoaded(true)

        }
        handleItemDetailInfo();
    }, [id]);

    if (!loaded) {
        return null
    }

    return (
        <React.Fragment>
            <PageContainer>



                {itemInfo !== null ?
                    <FlexContainer>
                        <TitleContainer>
                            <h1>Item Details</h1>
                            <span>see more <StyledLink to={`/category/${itemInfo.category}`}>{itemInfo.category}</StyledLink> items</span>
                        </TitleContainer>

                        <Row>
                            <ImageContainer>
                                <img src={itemInfo.imageSrc} />
                            </ImageContainer>
                            <Column>
                                <h2>{itemInfo.price}</h2>
                                <p>{itemInfo.name}</p>

                                <StyledLink to={`/sellers/${itemInfo.companyId}`}>
                                    <p>
                                        See More Items from {itemInfo.name.split(" ")[0]}
                                    </p>
                                </StyledLink>




                                <CartButtonContainer>
                                    <StyledInput 
                                    type="number"
                                    min="1"
                                    value={props.quantity}
                                    placeholder="1"
                                    onChange={handleQuantity} />
                                    {!inCart &&
                                        <StyledButton
                                            onClick={() =>
                                                dispatch(addItem(itemInfo))}>
                                            Add to cart</StyledButton>}
                                    {inCart && <p>Added to cart</p>}
                                </CartButtonContainer>

                            </Column>

                        </Row>

                        <PageHeadings>Similar {itemInfo.category} Items</PageHeadings>



                        {itemInfo !== null && <RelatedItems itemInfo={itemInfo}></RelatedItems>}

                    </FlexContainer> :


                    // add spinner loading.
                    <div><MiddlePage><ClipLoader color={"#164C81"} size={100} /></MiddlePage></div>}
            </PageContainer>
        </React.Fragment>
    )
}

const FlexContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    margin-top: 80px; 
`

const TitleContainer = styled.div`
    
    margin-bottom: 70px; 
    text-align: center;
    width: 100%; 
    

    h1 {
        margin: 0; 
        padding: 0; 
        font-size: 4rem;
        font-weight: 800;
    }

    span {
        margin: 0; 
        padding: 0; 
        color: #4A4F6A;
        font-weight: 600; 
        text-transform: lowercase; 
        
    }
`



const Row = styled.div`

@media only screen and (min-width: 1025px) {
    display: flex; 
    justify-content: center; 

}
@media only screen and (max-width: 1024px) {

}
   
    

`

const ImageContainer = styled.image`

    width: 50%; 
    img {
        width: 310px; 
    }


    `

const Column = styled.div`

    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    margin-left: 60px; 

    h2 {
        font-size: 2.2rem;
        font-weight: 600; 
    }
    p {
        font-size: 1.3rem; 
    }

    `

const CartButtonContainer = styled.div`
@media only screen and (min-width: 1025px) {

    display: flex; 
    margin: 50px 0; 
}


@media only screen and (max-width: 1024px) {
    display: grid;
    


}
    
    
`
const StyledInput = styled.input`
    background: none; 
    border: none;
    border-bottom: 2px solid #EEEEEE;
    width: 60px; 
    font-size: 1.5rem; 
    text-align: center;

`

const StyledButton = styled.button`
    background: #164C81;
    width: 235px; 
    color: white; 
    text-transform: uppercase; 
    height: 55px; 
    font-size: .8rem; 
    margin-left: 10px; 
    font-weight: 600; 
    
    
`

const StyledLink = styled(Link)`
    color: inherit; 
    text-decoration: none; 
    p {
        font-size: .9rem;
        font-weight: 600; 
        color: #164C81;
    }
`

export default connect(null, { addItem })(Item); 