import React, { useState } from 'react'
import './Slider.scss'

import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

const Slider = () => {
  const data = [
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/10669640/pexels-photo-10669640.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ]

  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    let len = data.length
    setCurrentImage(currentImage === 0 ? (len - 1) : (currentImage - 1))
    // kalau indeks image nya 0, maka pas klik sebelumnya ke panjang array -1
  }

  const nextImage = () => {
    let len = data.length
    setCurrentImage(currentImage === (len - 1) ? 0 : (currentImage + 1))
    // kalau indeks image terakhir, pas klik next ke indeks 0
  }

  // setInterval(nextImage, 6000)

  return (
    <div className='slider'>
      <div className="container" style={{transform: `translateX(-${currentImage * 100}vw)`}}>
          <img src={data[0]} alt="" />
          <img src={data[1]} alt="" />
          <img src={data[2]} alt="" />
          <img src={data[3]} alt="" />
      </div>

      <div className="icons">
          <div className="icon" onClick={prevImage}>
            <NavigateBeforeOutlinedIcon/>
          </div>
          <div className="icon" onClick={nextImage}>
            <NavigateNextOutlinedIcon/>
          </div>
      </div>
    </div>
  )
}

export default Slider