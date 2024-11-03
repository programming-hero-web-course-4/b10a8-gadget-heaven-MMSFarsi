import React from 'react'
import Button from '../Utility/Button';
import { NavLink } from 'react-router-dom';

const Card = ({gadget}) => {
    const {product_id,
        product_title,
        product_image,
        category,
        price,
        description,
        specification,
        availability,
        rating}=gadget;
  return (
    <div className="card bg-base-100 w-full shadow-xl">
    <figure className="px-5 pt-5">
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
        className="rounded-xl" />
    </figure>
    <div className="card-body ">
      <h2 className="card-title">{product_title}</h2>
      <p>Price:{price}$</p>
      <div className="card-actions">
      <NavLink to={`/gadget/${product_id}`}> <Button btnInside={"View Details"}></Button></NavLink>
      </div>
    </div>
  </div>
  )
}

export default Card