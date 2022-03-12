import React from 'react'
import "./category.css"

const Category = ({category}) => {
  return (
    <div className='sectionFiveCategory'>
                        <img className='sectionFiveImg' src={category.img} alt="" width="350" height="350" />
                        <h3 className='sectionFiveTitle' >{category.title}</h3>
                </div>
  )
}

export default Category