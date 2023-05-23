import React from 'react'
import { Link } from 'react-router-dom'

import './Card.scss'

const Card = (props) => {
  // console.log(props)
  const {id, img, img2, title, slug, isNew, oldPrice, price} = props
  return (
    <Link to={`/product/${slug}`} key={id}>
      <div className='card'>
        <div className="image">
          {isNew && <span>New Item</span>}
          <img src={img} alt="" className="mainImg" />
          <img src={img2} alt="" className="secondImg" />
        </div>
        <h3>{title}</h3>
        <div className="prices">
          <p className='newPrice'>Rp. {price}</p>
          <p className='oldPrice'>Rp. {oldPrice}</p>
        </div>

      </div>

    </Link>
  )
}

export default Card