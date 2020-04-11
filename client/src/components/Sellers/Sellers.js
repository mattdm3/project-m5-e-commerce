import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import styled from 'styled-components';

const Sellers = () => {

    //state will hold the company info
    const [companyState, setCompanyState] = useState(null)
    //Get the comapny - ID from the URL
    const { companyId } = useParams();


    //as soon as this company gets rendered. Will do a fetch
    useEffect(() => {
        fetch(`/sellers/${companyId}`)
            .then(res => res.json())
            .then(companyData => setCompanyState(companyData))
            .catch(() => window.alert('Error occured finding the company. '))
    }, [])


    return (<Wrapper> {companyState !== null ?

        <div>
            <div>{companyState.name}</div>
            <a href={companyState.url}>Visit their website! - {companyState.url}</a>
            <div>{companyState.country}</div>
        </div>

        : <div>Loading...</div>}
    </Wrapper>
    )


}

export default Sellers;


const Wrapper = styled.div`
display: flex;
justify-content: center;

`