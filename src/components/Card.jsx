import React from 'react';
import Button from '../Utility/Button';
import { NavLink } from 'react-router-dom';

const Card = ({ gadget }) => {
  const {
    product_id,
    product_title,
    product_image,
    price,
  } = gadget;

  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure className="px-5 pt-5">
        <img
          src={product_image}
          alt={product_title}  
          className="rounded-xl w-full h-56" 
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: {price}$</p>
        <div className="card-actions">
          <NavLink to={`/gadget/${product_id}`}>
            <Button  btnInside={"View Details"} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Card;
