import React from 'react'
import './Cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinys rgb&w=1600",
    img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinys rgb&w=1600",
    title: "Long Sleeve Graphic T-shirt",
    slug: "long-sleeve-graphic-t-shirt",
    isNew: true,
    oldPrice: 200000,
    price: 75000,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinys rgb&w=1600",
      title: "Leather Coat",
      slug: "leather-coat",
      isNew: true,
      oldPrice: 600000,
      price: 250000,
    },
]

const Cart = () => {
  return (
    <div className='cart'>
      <h2>Products in your cart</h2>
      {data?.map(item => {
        return (
          <div className="item" key={item.id}>
            <img src={item.img} alt="" className=''/>
            <div className="details">
              <h4>{item.title}</h4>
              <p>{item.desc?.subString(0, 70)}</p>
              <div className="price">1 x {item.price}</div>
            </div>
          <DeleteOutlineIcon className='delete'/>
          </div>
        )
      })}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>Rp. 232.153.611</span>
      </div>

      <button>PROCEED TO CHECKOUT</button>
      <span className='reset'>Empty the cart</span>

    </div>
  )
}

export default Cart