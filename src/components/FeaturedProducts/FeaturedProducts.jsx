import React from 'react'
import Card from './../Card/Card'
import './FeaturedProducts.scss'

const FeaturedProducts = ({type}) => {
    const data = [
      {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinys rgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinys rgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 200000,
      price: 75000,
      },
      {
        id: 2,
        img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinys rgb&w=1600",
        title: "Coat",
        isNew: true,
        oldPrice: 600000,
        price: 250000,
      },
      {
        id: 3,
        img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinys rgb&w=1600",
        title: "Skirt",
        oldPrice: 199000,
        price: 99000,
      },
      {
        id: 4,
        img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinys rgb&w=1600",
        title: "Hat",
        oldPrice: 119000,
        price: 79000,
      },
    ]

  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} Products</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi aut deserunt quis perspiciatis libero nisi voluptas aperiam reiciendis dolorum! Voluptatum praesentium iusto optio sunt nostrum ut sit perspiciatis fugit quidem.</p>
      </div>
      <div className="bottom">
        {
          data.map((item) => {
            return <Card key={item.id} {...item} />
          } )
        }
      </div>

    </div>
  )
}

export default FeaturedProducts