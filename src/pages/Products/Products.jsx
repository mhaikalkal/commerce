import React, { useState } from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { currency } from '../../currency'

// filter
const Products = () => {
  const catSlug = useParams().slug
  const [maxPrice, setMaxPrice] = useState(10000000)
  const [sort, setSort] = useState("asc")
  const [selectedSubCats, setSelectedSubCats] = useState([])

  // buat filter nanti, sub categories nya
  // cari sub categori yang ada di dalam category=slug / category yang dicari dari slug.
  const {loading, data, error} = useFetch(`/sub-categories?[filters][categories][slug]=${catSlug}`)

  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    // kalo di checklis, maka tambah value ke [selectedCats], kalau enggak, pake [selectedCats] nya aja
    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item !== value))
  }

  return (
    <div className='products' key={catSlug}>
      <div className="left">
        <div className="filterItem">
          <h2>Products Categories</h2>

          {data?.map(item => {
            return (
            <div className="inputItem">
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
              <label htmlFor={item.id} >{item.attributes.title}</label>
            </div>)
          })}
          
        </div>

        <div className="filterItem">
          <h2>Filter by Price</h2>
            <div className="inputItem">
                <span className='pricelabel'>Rp. 0</span>
                <input type="range" min='0' max='10000000' onChange={(e) => setMaxPrice(e.target.value)} value={maxPrice}/>
                <span className='pricelabel'>Rp. {currency(maxPrice)},-</span>
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
        <List catSlug={catSlug} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  )
}

export default Products