import React from 'react';
import Header from './Header.js';
import './HomePage.css';

function HomePage(props) {
    return (
        <div>
            <Header />
            <h1 className ='gallaryTitle'>Gallary</h1>
        </div>
    );
}

export default HomePage;