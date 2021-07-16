import React from 'react';

function Checkout(props) {
    return (
        <div>
            <h1 className = 'checkoutTitle'>Checkout</h1>
            <h2 className = 'shippingInfo'>Shipping Information</h2>
            <form>
                    <label className = 'checkoutInfo'>
                        <input firstname = 'first name'/>
                        <p>First Name</p>
                        <input lastname = 'last name'/>
                        <p>Last Name</p>
                        <input email = 'email'/>
                        <p>Email</p>
                        <input streetaddress = 'street address'/>
                        <p>Street Address</p>
                        <input city = 'city'/>
                        <p>City</p>
                        <select name = 'state list'>
                        <option value = ''> </option>
                            <option value = 'Alabama'>Alabama</option>
                            <option value = 'Alaska'>Alaska</option>
                            <option value = 'Arizona'>Arizona</option>
                            <option value = 'Arkansas'>Arkansas</option>
                            <option value = 'California'>California</option>
                            <option value = 'Colorado'>Colorado</option>
                            <option value = 'Connecticut'>Connecticut</option>
                            <option value = 'Delaware'>Delaware</option>
                            <option value = 'Florida'>Florida</option>
                            <option value = 'Georgia'>Georgia</option>
                            <option value = 'Hawaii'>Hawaii</option>
                            <option value = 'Idaho'>Idaho</option>
                            <option value = 'Illinois'>Illinois</option>
                            <option value = 'Indiana'>Indiana</option>
                            <option value = 'Iowa'>Iowa</option>
                            <option value = 'Kansas'>Kansas</option>
                            <option value = 'Kentucky'>Kentucky</option>
                            <option value = 'Louisianna'>Louisianna</option>
                            <option value = 'Maine'>Maine</option>
                            <option value = 'Maryland'>Maryland</option>
                            <option value = 'Massachusetts'>Massachusetts</option>
                            <option value = 'Michigan'>Michigan</option>
                            <option value = 'Minnesota'>Minnesota</option>
                            <option value = 'Mississippi'>Mississippi</option>
                            <option value = 'Missouri'>Missouri</option>
                            <option value = 'Montana'>Montana</option>
                            <option value = 'Nebraska'>Nebraska</option>
                            <option value = 'Nevada'>Nevada</option>
                            <option value = 'Nevada'>Nevada</option>                            <option value = 'New Hampshire'>New Hampshire</option>
                            <option value = 'New Jersey'>New Jersey</option>
                            <option value = 'New Mexico'>New Mexico</option>
                            <option value = 'New York'>New York</option>
                            <option value = 'North Carolina'>North Carolina</option>
                            <option value = 'North Dakota'>North Dakota</option>
                            <option value = 'Ohio'>Ohio</option>
                            <option value = 'Oklahoma'>Oklahoma</option>
                            <option value = 'Oregon'>Oregon</option>
                            <option value = 'Pennsylvania'>Pennsylvania</option>
                            <option value = 'Rhode Island'>Rhode Island</option>
                            <option value = 'South Carolina'>South Carolina</option>
                            <option value = 'South Dakota'>South Dakota</option>
                            <option value = 'Tennessee'>Tennessee</option>
                            <option value = 'Texas'>Texas</option>
                            <option value = 'Utah'>Utah</option>
                            <option value = 'Vermont'>Vermont</option>
                            <option value = 'Virginia'>Virginia</option>
                            <option value = 'Washington'>Washington</option>
                            <option value = 'West Virginia'>West Virginia</option>
                            <option value = 'Wisconsin'>Wisconsin</option>
                            <option value = 'Wyoming'>Wyoming</option>
                            </select>
                        <p>State</p>
                        <input zipcode = 'zip code'/>
                        <p>Zip Code</p>
            
                <h2>Payment Information</h2>
            
                        <input firstname = 'first name'/>
                        <p>First Name</p>
                        <input lastname = 'last name'/>
                        <p>Last Name</p>
                        <input creditcardenumber = 'credit card number'/>
                        <p>Credit Card Number</p>
                        <select name = 'expiration date month' id = 'expiration date month'>
                        <option value = ''> </option>
                            <option value = '01'>01</option>
                            <option value = '02'>02</option>
                            <option value = '03'>03</option>
                            <option value = '04'>04</option>
                            <option value = '05'>05</option>
                            <option value = '06'>06</option>
                            <option value = '07'>07</option>
                            <option value = '08'>08</option>
                            <option value = '09'>09</option>
                            <option value = '10'>10</option>
                            <option value = '11'>11</option>
                            <option value = '12'>12</option>
                        </select>
                        <select name = 'expiration date year' id = 'expiration date year'>
                        <option value = ''> </option>
                            <option value = '2021'>2021</option>
                            <option value = '2022'>2022</option>
                            <option value = '2023'>2023</option>
                            <option value = '2024'>2024</option>
                            <option value = '2025'>2025</option>
                            <option value = '2026'>2026</option>
                            <option value = '2027'>2027</option>
                            <option value = '2028'>2028</option>
                            <option value = '2029'>2029</option>
                            <option value = '2030'>2030</option>
                        </select>
                        <p>Expiration Date</p>
                        <input cvv = 'cvv'/>
                        <p>CVV</p>

                <h2>Billing Address</h2>
                <input streetaddress = 'street address'/>
                        <p>Street Address</p>
                        <input city = 'city'/>
                        <p>City</p>
                        <input state = 'state'/>
                        <p>State</p>
                        <input zipcode = 'zip code'/>
                        <p>Zip Code</p>
                    </label>
                 <button type = 'submit'>Confirm Purchase</button>
            </form>
           
        </div>
    );
}

export default Checkout;