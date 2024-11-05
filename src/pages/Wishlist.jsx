import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import CartCard from '../components/CartCard';
import { getAllWishlist, removeWishlist } from '../Utility/localStorage';

const Wishlist = () => {
  const [gadget, setGadget] = useState([]);
 

  useEffect(() => {
    const selectedGadget = getAllWishlist();
    setGadget(selectedGadget);
  }, []);

  const handleRemove = (id) => {
    removeWishlist(id);
    const updatedGadgets = gadget.filter((g) => g.product_id !== id);
    setGadget(updatedGadgets);
  };

 

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-gray-50 border-b-2 border-purple-500">
     
        <h2 className="text-lg font-semibold">Wishlist</h2>

       
      </div>
      <div className="mb-4">
        {gadget.map((gadget) => (
          <CartCard handleRemove={handleRemove} key={gadget.product_id} gadget={gadget} />
        ))}
      </div>

     
   
    </div>
  );
};

export default Wishlist;
