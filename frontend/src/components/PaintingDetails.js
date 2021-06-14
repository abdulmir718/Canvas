import './PaintingDetails.css'
import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {addToCart} from '../redux/actions/cartAction.js';
import {getPaintingDetails} from '../redux/actions/paintingActions.js';


function PaintingDetails({match, history}) {
    // const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const paintingDetails = useSelector(state => state.getPaintingDetails);
    const {loading, error, painting} = paintingDetails;
    console.log("THIS IS PAINTINGDETAILS: ", paintingDetails)
    useEffect (() => {
        console.log("IN USEFFECT BITCH ")
        if(painting && match.params.id !== painting._id) {
            console.log("ID don't match ")
            dispatch(getPaintingDetails(match.params.id))
        };

    }, []);
    return (
        <div className = 'paintingDetails'>
            {loading ? <h1>Loading Artwork...</h1> : error ? <h1>{error}</h1> : (
                <>
                <div className = 'paintingDetailsContainer'>

<div className = 'paintingDetailsLeftPannel'>
    <div className = 'paintingDetailsImg'>
        <img src = {painting.imageUrl} alt = {painting.name}/>
    </div>

</div>

<div className = 'paintingDetailsRightPanel'>
    <h3 className = 'paintingName'>{painting.name}</h3>
    <h3 className = 'paintingYear'> {painting.year}</h3>
    {/* <p className = 'paintingYear'>2001</p> */}
    <p className = 'paintingPrice'> {painting.price} USD</p>
    <p className = 'paintingDescription'>{painting.description}</p>
    {/* <p className = 'paintingSold'>{painting.sold === false ? 'Available' : 'Sold'}</p> */}
        <div className = 'paintDetailsButtons'>
            <button className = 'acquireButton' type = 'button'>Acquire Artwork</button>
            <Link to = '/cart' className = 'viewCartButton'>
                <button type = 'button'> View Cart</button>
            </Link>
        </div>

</div>

</div>

                </>

            )}
            
        </div>
    );
}

export default PaintingDetails;