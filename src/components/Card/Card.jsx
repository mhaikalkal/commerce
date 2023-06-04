import React from 'react'
import { Link } from 'react-router-dom'

import './Card.scss'

const Card = (props) => {
  // console.log(props)
  const {id, img, title, slug, isNew, price, sale} = props;

  let saleTotal = (price * sale[1]/100)
  let oldPrice = price + saleTotal

  return (
    <Link to={`/product/${slug}`} key={id}>
      <div className='card'>

        <div className="image">
          {isNew && <span>New Item</span>}
          <img src={process.env.REACT_APP_UPLOAD_URL + img.data[0].attributes.url} alt="" className="mainImg" />
          <img src={process.env.REACT_APP_UPLOAD_URL + img.data[1].attributes.url} alt="" className="secondImg" />
        </div>
        <h3>{title}</h3>
        <div className="prices">
          <p className='newPrice'>Rp. {price}</p>
          {sale[0] && <p className='oldPrice'>Rp. {oldPrice}</p>}
        </div>

      </div>

    </Link>
  )
}

export default Card