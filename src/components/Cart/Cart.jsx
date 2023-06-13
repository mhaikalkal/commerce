import React from 'react'
import './Cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import { currency } from '../../currency';
import { removeItem } from '../../redux/cartReducer';

const Cart = () => {
  // state ini = state di redux/store. terus kalo state.cart maka state 'cart' di redux/cartReducer.
  const products = useSelector((state) => state.cart.products)
  const dispatch = useDispatch()

  const totalPrice = () => {
    let total = 0
    products.forEach((item) => (total += item.quantity * item.price))
    return currency(total);
  }

  console.log(totalPrice)

  return (
    <div className='cart'>
      <h2>Products in your cart</h2>
      {products?.map(item => {
        return (
          <div className="item" key={item.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" className=''/>
            <div className="details">
              <h4>{item.title}</h4>
              <p>{item.desc?.toString().substring(0, 70)}</p>
              <div className="price">{item.quantity} x {item.price}</div>
            </div>
          <DeleteOutlineIcon className='delete' onClick={() => dispatch(removeItem(item.id))}/>
          </div>
        )
      })}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>Rp. {totalPrice()}</span>
      </div>

      <button>PROCEED TO CHECKOUT</button>
      <span className='reset'>Empty the cart</span>

    </div>
  )
}

export default Cart