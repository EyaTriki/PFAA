import React from 'react';
import "./navbar.css";
import abc from "./amazon.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav>
                <div className='left'>
                    <div className='navlogo'>
                       <NavLink to="/"> <img src={abc} /></NavLink>
                    </div>

                    <div className="nav_searchbaar">
                        <input type={Text} name="" id="" />
                        <div className='search_icon'>
                            <SearchIcon id="search" />
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='nav_btn'>
                        <NavLink to='/login'>SignIn</NavLink>
                    </div>
                    <div className="cart_btn">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon id="icon" />
                        </Badge>
                        <p>Cart</p>
                    </div>
                    <Avatar className='avatar'/>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
