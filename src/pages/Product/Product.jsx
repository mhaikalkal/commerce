import React, {useState} from 'react'
import './Product.scss'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { currency } from '../../currency';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
  const productId = useParams().id
  
  const {loading, data, error} = useFetch(`/products/${productId}?populate=*`)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data[0]?.attributes?.url} alt="" onClick={(e) => setSelectedImage(0)}/>
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data[1]?.attributes?.url} alt="" onClick={(e) => setSelectedImage(1)}/>
        </div>
        <div className="mainImage">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data[selectedImage]?.attributes?.url} alt="" />
        </div>
      </div>

      <div className="right">
        <h1 className="title" key={productId}>{data?.attributes?.title}</h1>
        <span className="price">Rp. {currency(data?.attributes?.price)} ,-</span>
        <p className='desc'>{data?.attributes?.desc}</p>
        
        <div className="qty">
          <button onClick={() => setQuantity((prev) => prev === 1 ? prev : prev - 1 )}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>

        <button className='add' onClick={() => dispatch(addToCart(
          {
            id: data.id,
            title: data.attributes.title,
            desc: data?.attributes.desc,
            img: data?.attributes?.img?.data[0]?.attributes?.url,
            price: data.attributes.price,
            quantity: quantity
          }
        ))}>
          <AddShoppingCartIcon />
          Add to cart
        </button>

        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/>
            Add to Wishlish
          </div>
          <div className="item">
            <CompareArrowsIcon/>
            Compare
          </div>
        </div>

        <div className="info">
          <span>Vendor : Nike</span>
          <span>Product Type : Shirt</span>
          <span>Tag : T-shirt, Women, Top</span>
        </div>
        
        <hr />

        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product