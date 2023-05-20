import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <Link className="link" to='/'><img src="/img/logo.png" alt="" width={'32px'}/></Link>
        </div>

        <div className="center">
          <div className="item">
            <Link className="link" to="/products/women">Women</Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/men">Men</Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/children">Children</Link>
          </div>
        </div>

        <div className="right">
          <div className="icons">
            <SearchOutlinedIcon/> 
            <FavoriteBorderOutlinedIcon/> 
            <PersonOutlineIcon/> 

            <div className="cartIcon">
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar