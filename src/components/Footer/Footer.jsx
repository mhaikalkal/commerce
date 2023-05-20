import React from 'react'
import {Link} from 'react-router-dom'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">

      <div className="wrapper">
        
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>

          <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>

          <div className="item">
            <h1>About</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid recusandae magnam porro, officiis animi quasi doloribus voluptatibus unde. Nostrum sequi perferendis tempore dolores, illo ut eius ea doloremque impedit nemo, aliquid, blanditiis at laborum pariatur voluptatibus reiciendis praesentium libero dolorem!</span>
          </div>

          <div className="item">
            <h1>Contact</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid recusandae magnam porro, officiis animi quasi doloribus voluptatibus unde. Nostrum sequi perferendis tempore dolores, illo ut eius ea doloremque impedit nemo, aliquid, blanditiis at laborum pariatur voluptatibus reiciendis praesentium libero dolorem!</span>
          </div>
        </div>

        <div className="bottom">
          <div className="left">
            <Link className="logo" to='/'><img src="/img/logo.png" alt="" width={'32px'}/></Link>
            <div className="credit">Kalsium © Copyright 2023. All Rights Reserved</div>
          </div>
          <div className="right">Made with tears and joy 💕</div>
        </div>
      </div>
    </div>
  )
}

export default Footer