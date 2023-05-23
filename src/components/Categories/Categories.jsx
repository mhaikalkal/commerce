import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'

const Categories = () => {
  return (
    <div className='categories'>
      <div className="col"> {/* 1 kolom ada 2 baris */}
        <Link className="row scale-anim" to="/products/sale">
          <img src="https://images.pexels.com/photos/5868272/pexels-photo-5868272.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          <span>SALE</span>
        </Link>

        <Link className="row scale-anim" to="/products/women">
          <img src="https://images.pexels.com/photos/789303/pexels-photo-789303.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          <span>WOMEN</span>
        </Link>
      </div>

      <div className="col"> {/* 1 kolom ada 1 baris, mau dipanjangin kebawah */}
        <Link className="row scale-anim" to="/products/new-items"> 
          <img src="https://images.pexels.com/photos/1186116/pexels-photo-1186116.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          <span>NEW ITEMS</span>
        </Link>
      </div>

      <div className="col col-l"> {/* 1 kolom ada 2 baris */}

        <div className="row"> {/* baris pertama, pengen ada 2 kolom*/}
          <div className="col">
            <Link className="row scale-anim" to="/products/men">
              <img src="https://images.pexels.com/photos/1450116/pexels-photo-1450116.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
              <span>MEN</span>
            </Link> {/* kolomnya harus ada row */}
          </div>

          <div className="col">
            <Link className="row scale-anim" to="/products/accessories">
              <img src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
              <span>ACCESSORIES</span>
            </Link>
          </div>
        </div>

        <Link className="row scale-anim" to="/products/shoes">
          <img src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          <span>SHOES</span>
        </Link> {/* baris kedua */}
      </div>
    </div>
  )
}

export default Categories