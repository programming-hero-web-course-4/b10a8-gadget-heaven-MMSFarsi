import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { addCart, addWishlist } from '../Utility/localStorage';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Helmet } from 'react-helmet';

const GadgetDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [gadget, setGadget] = useState({});
    const [isWishlistClicked, setIsWishlistClicked] = useState(false); // Track if heart is clicked

    useEffect(() => {
        const selectedGadget = data.find(gadget => gadget.product_id === parseInt(id));
        setGadget(selectedGadget || {});
    }, [id, data]);

    const handleAddCart = () => {
        if (gadget.availability) {
            addCart(gadget);
        }
    };

    const handleAddWishlist = () => {
        if (!isWishlistClicked) {
            addWishlist(gadget);
            setIsWishlistClicked(true); 
        }
    };

    return (
        <div className="relative flex flex-col items-center ">
            <Helmet><title>Products || Gadget Zone</title></Helmet>
            <div className="w-full h-[250px] absolute top-0 left-0 right-0 bg-[#9538E2] text-white flex flex-col">
                <h2 className="text-3xl text-center font-bold pt-10 mb-4">Product Details</h2>
                <p className="text-center max-w-[700px] mx-auto">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>

            <div className="relative pt-40 flex w-[900px] justify-center">
                <div className="bg-white shadow-lg rounded-xl p-8 gap-10 flex flex-col items-start md:flex-row">
                    <div className="w-[300px] my-auto bg-gray-200 rounded-lg mr-6">
                        <img src={gadget.product_image} alt={gadget.product_title} className="w-full h-full object-cover rounded-lg"/>
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

                        <div className="flex gap-3 items-center">
                            <button
                                onClick={handleAddCart}
                                disabled={!gadget.availability}
                                className={`px-6 py-3 inline-flex items-center rounded-3xl font-bold 
                                    ${gadget.availability ? 'bg-[#9538E2] text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                            >
                                Add to Cart
                                <span className="ml-2 text-lg">
                                    <MdOutlineShoppingBag />
                                </span>
                            </button>
                            <button 
                                onClick={handleAddWishlist} 
                                disabled={isWishlistClicked} 
                                className={`px-6 py-3 border rounded-full ${isWishlistClicked ? 'bg-gray-300 cursor-not-allowed' : ''}`}
                            >
                                <FaRegHeart className={`${isWishlistClicked ? 'text-red-500' : 'text-black'}`} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;
