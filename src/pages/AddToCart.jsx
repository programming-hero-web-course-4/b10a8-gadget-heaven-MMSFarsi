import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { getAllCart, removeCart } from '../Utility/localStorage';
import CartCard from '../components/CartCard';
import congoImg from '../assets/Group.png'

const AddToCart = () => {
  const [gadget, setGadget] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const selectedGadget = getAllCart();
    setGadget(selectedGadget);
    calculateTotalCost(selectedGadget); 
  }, []);

  const handleRemove = (id) => {
    removeCart(id);
    const updatedGadgets = gadget.filter((g) => g.product_id !== id);
    setGadget(updatedGadgets);
    calculateTotalCost(updatedGadgets); 
  };

  const calculateTotalCost = (gadgets) => {
    const total = gadgets.reduce((acc, gadget) => acc + gadget.price, 0);
    setTotalCost(total);
  };

  const sortByPrice = () => {
    const sortedGadgets = [...gadget].sort((a, b) => b.price - a.price); 
    setGadget(sortedGadgets);
  };

  const handlePurchase = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    localStorage.removeItem('cart'); 
    setGadget([]);
    setIsModalOpen(false); 
    navigate('/'); 
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-gray-50 border-b-2 border-purple-500">
     
        <h2 className="text-lg font-semibold">Cart</h2>

        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold">Total cost: ${totalCost.toFixed(2)}</span>

          
          <button 
            onClick={sortByPrice} 
            className="flex items-center px-3 py-1 border rounded-full text-purple-500 border-purple-500 hover:bg-purple-100 transition">Sort by Price </button>

          <button 
            onClick={handlePurchase} 
            disabled={gadget.length === 0} 
            className={`px-4 py-2 rounded-full ${gadget.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-purple-500 text-white hover:bg-purple-600 transition'}`}
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="mb-4">
        {gadget.map((gadget) => (
          <CartCard handleRemove={handleRemove} key={gadget.product_id} gadget={gadget} />
        ))}
      </div>

     
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <img className='mx-auto' src={congoImg} alt="" />
            <h2 className="text-xl font-bold mb-2">Payment Succefully</h2>
            <p className='text-center'>Thank You for Purchasing</p>
            <p className="text-center mb-4">Total: ${totalCost.toFixed(2)}</p>
            <button 
              onClick={closeModal} 
              className="px-4 py-2 w-full mx-auto rounded-lg bg-purple-500 text-white  hover:bg-purple-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
