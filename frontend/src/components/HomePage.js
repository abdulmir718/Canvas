import React from 'react';
import Header from './Header.js';
import './HomePage.css';
import Paintings from './Paintings.js';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPaintings as paintingsList} from '../redux/actions/paintingActions.js';

function HomePage(props) {
    const dispatch = useDispatch();
    const getPaintings = useSelector((state) => state.getPaintings);
    const {paintings, loading, error} = getPaintings;

    useEffect(() => {
        dispatch(paintingsList())

    }, [dispatch]);
    return (
        <div className = 'homepage'>
            <Header />
            <h1 className ='homepageTitle'>Gallery</h1>
            <div className = 'paintingsGrid'>
                {loading ? <h1>Loading Artwork...</h1> : error ? <h1>{error}</h1> : paintings.map(painting => (
                    <Paintings id = {painting._id} key = {painting._id} name = {painting.name} price = {painting.price} imageUrl = {painting.imageUrl}/>
                    
                ))}
            </div>
        </div>
    );
}

export default HomePage;