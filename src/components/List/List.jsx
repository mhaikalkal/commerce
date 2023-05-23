import React from 'react'
import './List.scss'
import Card from '../Card/Card'

const List = (props) => {
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
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinys rgb&w=1600",
      title: "Long Skirt",
      slug: "long-skirt",
      oldPrice: 199000,
      price: 99000,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinys rgb&w=1600",
      title: "PSD Hat",
      slug: "psd-hat",
      oldPrice: 119000,
      price: 79000,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinys rgb&w=1600",
      title: "Long Skirt",
      slug: "long-skirt",
      oldPrice: 199000,
      price: 99000,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinys rgb&w=1600",
      title: "PSD Hat",
      slug: "psd-hat",
      oldPrice: 119000,
      price: 79000,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinys rgb&w=1600",
      title: "Long Skirt",
      slug: "long-skirt",
      oldPrice: 199000,
      price: 99000,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinys rgb&w=1600",
      title: "PSD Hat",
      slug: "psd-hat",
      oldPrice: 119000,
      price: 79000,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinys rgb&w=1600",
      title: "Long Skirt",
      slug: "long-skirt",
      oldPrice: 199000,
      price: 99000,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinys rgb&w=1600",
      title: "PSD Hat",
      slug: "psd-hat",
      oldPrice: 119000,
      price: 79000,
    },
  ]
  
  return (
    <div className="list">
      {data.map(item => {
        return <Card key={item.id} {...item}/>
      })}
    </div>
  )
}

export default List