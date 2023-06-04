import React, { useState } from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import Category from '../../data/Category'

const Products = () => {
  
  const catId = parseInt(useParams().id)

  const [maxPrice, setMaxPrice] = useState(0)

  // nambah titik di number / harga
  const currency = (maxPrice) => {
    let number = maxPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    return number
  }

  const [sort, setSort] = useState(null)

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Products Categories</h2>

          {Category.map(category => {
            return (
            <div className="inputItem">
              <input type="checkbox" name="" id={category.id} value={category.id} />
              <label htmlFor={category.id}>{category.title}</label>
            </div>)
          })}
          
        </div>

        <div className="filterItem">
          <h2>Filter by Price</h2>
            <div className="inputItem">
                <span className='pricelabel'>Rp. 0</span>
                <input type="range" min='0' max='10000000' onChange={(e) => setMaxPrice(currency(e.target.value))}/>
                <span className='pricelabel'>Rp. {maxPrice},-</span>
            </div>
        </div>

        <div className="filterItem">
          <h2>Sort By</h2>
            <div className="inputItem">
              <input type="radio" id='asc' value='asc' name='price' onChange={(e) => setSort('asc')}/>
              <label htmlFor="asc">Price (Lowest First)</label>
            </div>

            <div className="inputItem">
              <input type="radio" id='desc' value='desc' name='price' onChange={(e) => setSort('desc')}/>
              <label htmlFor="desc">Price (Highest First)</label>
            </div>
        </div>
      </div>

      <div className="right">
        <div className="container">
          <img src="https://images.pexels.com/photos/6770031/pexels-photo-6770031.jpeg?auto=compress&cs=tinysrgb&w=1200" className="catImage" alt="" />
        </div>
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products