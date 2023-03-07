import { Divider } from '@mui/material';
import React from 'react'
import './buynow.css';
import Right from './Right';
import Subtotal from './Subtotal';
import Option from './Option';

const Buynow = () => {
    return (
        <div className='buynow_section'>
            <div className='buynow_container'>
                <div className='left_buy'>
                    <h1>Shopping cart</h1>
                    <p>select all items</p>
                    <span className='leftbuyprice'> price</span>
                    <Divider/>
                    <div className='item_containert'>
                        <img src='https://www.wedemain.fr/wp-content/uploads/2020/04/43834408-36051839.jpg' alt=''/>
                        <div className='item_details'>
                            <h3>product name </h3>
                            <h3>product category </h3>
                            <h3 className='diffrentprice'>$546.23</h3>
                            <p className='unusuall'>usually dnfdlkjsgf lkrgjl</p>
                            <p>Free shipping</p>
                            <Option/>
                        </div>
                        <h3 className='item_price'>$565.235</h3>
                    </div>
                    <Divider/>
                    <Subtotal/>
                </div>
                <Right/>
            </div>
        </div>
    )
}

export default Buynow
