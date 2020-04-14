import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { GridWrapper, StyledStock } from '../CONSTANTS';
import RenderItem from '../ItemGrid/RenderItem';
import { Link } from "react-router-dom";



const BodyPart = () => {

    const [bodyItemInfo, setBodyItemInfo] = useState(null);

    //will grab from URL
    const { body } = useParams();
    console.log(body)


    useEffect(() => {

        const handleBodyPart = async () => {
            try {
                //fetch with all items that have this body part
                let response = await fetch(`/bodypart/${body}`);
                if (response.status === 200) {
                    let data = await response.json();
                    setBodyItemInfo(data)
                }
                //Refactoring for error handling.
                else {
                    throw Error("Error fetching body part")
                }
            }
            catch (error) {
                throw Error(error, 'catch inside body part')
            }
        }

        handleBodyPart();

    }, [body])

    console.log(bodyItemInfo)

    return (
        <div>
            {bodyItemInfo !== null ? <div>
                <GridWrapper>
                    {bodyItemInfo.map(item => {
                        return (
                            <Link to={`/item/${item.id}`}>
                                <RenderItem item={item}></RenderItem>
                                {item.numInStock == 0 && <StyledStock> Out Of Stock</StyledStock>}
                            </Link>)
                    })}
                </GridWrapper>

            </div>
                :
                <div>LOADING</div>}

        </div>
    )






}

export default BodyPart;