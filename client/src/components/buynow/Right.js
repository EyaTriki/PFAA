import React from 'react'
import { useState , useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import abc from "../header/amazon.png";
import axios from 'axios';

const KEY="pk_test_51MBFA0DXs7irTYXOI19xwUzrRDiAv2vNKzAdhJVz7UGm6Smwe9FPjlbILgOnhpPK519mo9bkLq7QOFIuaGnGMoWy003b5i5D5h"
const Right = () => {
    const [stripeToken , setStripeToken] = useState(null)
    const onToken=(token)=>{
        setStripeToken(token);
        };


        useEffect(()=>{
            const makeRequest = async()=>{
                try {
                   const res =await axios.post("http://localhost:8005/api/checkout/payment",{
                        tokenId:stripeToken.id,
                        amount:20000,
                   })
                   console.log(res.data);
                } catch (err) {
                    console.log(err)
                }
            }
            stripeToken && makeRequest();
        },[stripeToken]);

    return ( 
        <div className='right_buy'>
            <img src="https://assets-us-01.kc-usercontent.com/fbd574c4-da36-0066-a0c5-849ffb2de96e/c7b4b27b-1787-4cd8-b64a-874a9ef1fe9d/Course%20prerequisites%20banner%20ver%202.1.svg" alt='' />
            <div className='cost_right'>
                <p>your order is eligible for free delivery</p> <br />
                <span style={{ color: "#565959" }}>Selet this option at checkout.Details</span>
                <h3>Subtotal (1 item):  <span>$566.2</span></h3>
                <StripeCheckout name ="Eya's World"
                image={abc}
                billingAddress
                shippingAddress
                description='your total is 20dt'
                amount={20000}
                token={onToken}
                stripeKey={KEY}
                ><button className='rightbuy_btn'>Process to Buy</button></StripeCheckout>
                <div className='emi'>Emi available</div>
            </div>
        </div> 
    )
}

export default Right
