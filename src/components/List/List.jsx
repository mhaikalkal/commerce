import React from 'react'
import './List.scss'
import Card from '../Card/Card'
import Items from '../../data/Items'

const List = (props) => {  
  return (
    <div className="list">
      {Items.map(item => {
        return <Card key={item.id} {...item}/>
      })}
    </div>
  )
}

export default List