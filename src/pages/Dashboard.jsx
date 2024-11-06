import { useState } from "react";
import AddToCart from "./AddToCart";
import Wishlist from "./Wishlist";
import { Helmet } from 'react-helmet'

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('cart');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };


    return (
        <div className="bg-[rgba(9,8,15,0.05)] pb-12">
              <Helmet><title>Dashboard || Gadget Zone</title></Helmet>
            <div className="w-full h-[250px] bg-[#9538E2] text-white">
                <h2 className="text-3xl text-center font-bold pt-10">Dashboard</h2>
                <p className="text-center mt-2 max-w-[700px] mx-auto">
                The Dashboard is your central hub to manage all gadgets in your cart and wishlist. Quickly view, sort, and organize your items, check the total cost of your cart, and finalize purchases. With an intuitive interface, managing your gadgets has never been easier.
                </p>
                <div className="text-center pt-8">
                    <button
                        onClick={() => handleTabChange('cart')}
                        className={`px-5 py-2 font-bold rounded-xl border mr-1 ${activeTab === 'cart' ? 'bg-white text-[#9538E2]' : 'bg-transparent text-white'}`}
                    >
                        Cart
                    </button>
                    <button
                        onClick={() => handleTabChange('wishlist')}
                        className={`px-5 py-2 font-bold rounded-xl border ${activeTab === 'wishlist' ? 'bg-white text-[#9538E2]' : 'bg-transparent text-white'}`}
                    >
                        Wishlist
                    </button>
                </div>
            </div>

            <div>
                {activeTab === 'cart' && (
                    <div>
                        <AddToCart></AddToCart>

                    </div>
                )}
                {activeTab === 'wishlist' && (
                    <div>
                        <Wishlist></Wishlist>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
