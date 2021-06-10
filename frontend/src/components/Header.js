import React from 'react';
import './Header.css';


function Header(props) {
    return (
        <div className = 'header'>
            <div className = 'headerTitles'>
                <div ClassName = 'siteTitle'>
                CANVAS
                </div>
                <div ClassName = 'artistName'>
                Pierre Augustine
                </div>
            </div>
            {/* <img className = 'headerImg' src = 'https://i.imgur.com/zf8MOzU.jpg' alt = 'Paintbrush'/> */}
            
        </div>
    );
}

export default Header;