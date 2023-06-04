import React, {useState} from 'react'
import './Product.scss'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const img = [
  "https://images.pexels.com/photos/5868272/pexels-photo-5868272.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/789303/pexels-photo-789303.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1450116/pexels-photo-1450116.jpeg?auto=compress&cs=tinysrgb&w=800"
]

const Product = (props) => {
  // const {id, img, title, slug, isNew, price, sale} = props;

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={img[0]} alt="" onClick={(e) => setSelectedImage(0)}/>
          <img src={img[1]} alt="" onClick={(e) => setSelectedImage(1)}/>
        </div>
        <div className="mainImage">
          <img src={img[selectedImage]} alt="" />
        </div>
      </div>

      <div className="right">
        <h1 className="title">Judu</h1>
        <span className="price">Rp</span>
        <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum consectetur, sunt eligendi laudantium modi repellat, numquam atque temporibus veniam omnis quod hic nesciunt nulla adipisci sint saepe voluptas itaque placeat! Labore delectus quaerat voluptatum consectetur odit quae quod obcaecati neque doloribus error natus, quis nobis dolorum, nisi ipsum blanditiis cupiditate vitae beatae voluptates quibusdam commodi. Rem est repellendus eligendi.</p>
        
        <div className="qty">
          <button onClick={() => setQuantity((prev) => prev === 1 ? prev : prev -1 )}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>

        <button className='add'>
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