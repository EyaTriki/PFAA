import React from 'react'

const Right = () => {
    return (
        <div className='right_buy'>
            <img src="https://assets-us-01.kc-usercontent.com/fbd574c4-da36-0066-a0c5-849ffb2de96e/c7b4b27b-1787-4cd8-b64a-874a9ef1fe9d/Course%20prerequisites%20banner%20ver%202.1.svg" alt='' />
            <div className='cost_right'>
                <p>your order is eligible for free delivery</p> <br />
                <span style={{ color: "#565959" }}>Selet this option at checkout.Details</span>
                <h3>Subtotal (1 item):  <span>$566.2</span></h3>
                <button className='rightbuy_btn'>Process to Buy</button>
                <div className='emi'>Emi available</div>
            </div>
        </div> 
    )
}

export default Right
