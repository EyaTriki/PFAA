import { Divider } from '@mui/material'
import React from 'react'
import './cart.css'


const Cart = () => {
    return (

        <div className='cart_section'>
            <div className='cart_container'>
                <div className='left_cart'>
                    <img src='https://www.anacours.com/wp-content/uploads/2020/12/Cours_online-la-plateforme-numerique.jpg' alt='' />
                    <div className='cart_btn'>
                        <button className='cart_btn1'>Add to Cart</button>
                        <button className='cart_btn2'>By Now</button>
                    </div>
</div>
                    <div className='right_cart'>
                        <h3>Product Name</h3>
                        <h4>Product Description</h4>
                        <Divider />
                        <p className='mrp'>14569</p>
                        <p>Deal of the day: <span style={{ color: "#B12704" }}>$523.26</span></p>
                        <p>You Save: <span style={{ color: "#B12704" }}>$52(50%)</span></p>
                        <div className='discount_box'>
                            <h5>Discount:<span style={{color:"#111"}}>Extra 10% off</span></h5>
                            <h4>Free Delivery<span style={{color:"#111",fontWeight:600}}>Oct 8 - 27</span>Details</h4>
                            <p>Fastest Delivery:<span style={{color:"#111",fontWeight:600}}>Tomorrow 8AM</span></p>
                            <p className='description'><span style={{color:"#565959",fontSize:14,fontWeight:500,letterSpacing:"0.4px"}}>About the Item :</span> Le disque dur compact est largement adapté pour la maison, le bureau, l'ordinateur, l'ordinateur portable, etc. L'aide parfaite pour enregistrer une grande quantité de fichiers numériques. Avec Game Drive, vous pouvez également transporter toute votre bibliothèque de jeux à la maison d'un ami et jouer sur votre console.</p>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
