import React from 'react'
import './List.scss'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'

const List = (props) => {  
  const {catSlug, catId, sort, maxPrice, subCats} = props

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][slug][$eqi]=${catSlug}${subCats.map(
    item => `&[filters][sub_categories][id]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)
    // intinya cari barang dari category=slug, terus difilter sama sub_category=id, id karena value yg diambilnya id
  return (
    <div className="list">
      {error ? "Something Went Wrong.." : loading ? "Loading" : data.map(item => {
        return <Card key={item.id} {...item}/>
      })}
    </div>
  )
}

export default List