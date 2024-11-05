import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { addCart, addWishlist } from '../Utility/localStorage';

const GadgetDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [gadget, setGadget] = useState({});

    useEffect(() => {
        const selectedGadget = data.find(gadget => gadget.product_id === parseInt(id));
        setGadget(selectedGadget || {});
    }, [id, data]);

    const handleAddCart = () => {
        addCart(gadget);
    };
    const handleAddWishlist = () => {
        addWishlist(gadget);
    };


    return (
        <div className="relative flex flex-col items-center ">
            <div className="w-full h-[250px] absolute top-0 left-0 right-0 bg-[#9538E2] text-white flex flex-col">
                <h2 className="text-3xl text-center font-bold">Product Details</h2>
                <p className="text-center">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>

            <div className="relative pt-32 w-full max-w-2xl flex justify-center">
                <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl w-full flex flex-col items-start md:flex-row">
                    <div className="w-1/3 object-cover bg-gray-200 rounded-lg mr-6">
                        <img src={gadget.product_image} alt={gadget.product_title} />
                    </div>

                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-2">{gadget.product_title}</h2>
                        <p className="text-xl font-medium text-gray-700 mb-1">Price: ${gadget.price}</p>
                        <p className={`font-semibold mb-2 ${gadget.availability ? 'text-green-600' : 'text-red-600'}`}>
                            {gadget.availability ? 'In Stock' : 'Out of Stock'}
                        </p>
                        <p className="text-gray-600 mb-4">{gadget.description}</p>

                        <h3 className="font-semibold mb-1">Specification:</h3>
                        <ul className="list-decimal list-inside text-gray-700 mb-4">
                            {gadget.specification?.map((spec, index) => (
                                <li key={index}>{spec}</li>
                            ))}
                        </ul>

                        <div className="flex items-center mb-4">
                            <p className="font-semibold text-gray-700">Rating:</p>
                            {typeof gadget.rating === "number" && (
                                <ReactStars
                                    count={5}
                                    value={gadget.rating}
                                    size={24}
                                    edit={false}
                                    isHalf={true}
                                    color2="#FFD700"
                                    className="unique-rating-stars"
                                />
                            )}

                            <span className="ml-2 text-gray-500">({gadget.rating?.toFixed(1)})</span>
                        </div>

                        <button onClick={handleAddCart} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Add to Cart
                        </button>
                        <button onClick={handleAddWishlist} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;
