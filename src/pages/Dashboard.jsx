import { useState } from "react";
import AddToCart from "./AddToCart";
import Wishlist from "./Wishlist";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('cart');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };


    return (
        <div className="bg-[rgba(9,8,15,0.05)] pb-12">
            <div className="w-full h-[250px] bg-[#9538E2] text-white">
                <h2 className="text-3xl text-center font-bold">Dashboard</h2>
                <p className="text-center">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <div className="text-center">
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
