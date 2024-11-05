import toast from "react-hot-toast";

const getAllCart = () => {
    const Allcart = localStorage.getItem('cart');
    return Allcart ? JSON.parse(Allcart) : [];
};


const addCart = (gadget) => {
    const cart = getAllCart();
  
    const isExist = cart.find(item => item.product_id === gadget.product_id);
    
    if (isExist) {
        toast.error('This gadget is already in the cart!');
        return;
    }
    
    cart.push(gadget);
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success('This gadget is added to the cart!');
};


const removeCart = (gadgetId) => {
    let cart = getAllCart();
    const remainCart = cart.filter(gadget => gadget.product_id !== gadgetId); 
    localStorage.setItem('cart', JSON.stringify(remainCart));
    toast.success('Successfully Removed');
};

// Wishlist

// Get all items in the wishlist
const getAllWishlist = () => {
    const allWishlist = localStorage.getItem('wishlist');
    return allWishlist ? JSON.parse(allWishlist) : [];
};

// Add an item to the wishlist
const addWishlist = (gadget) => {
    const wishlist = getAllWishlist();
  
    const isExist = wishlist.find(item => item.product_id === gadget.product_id);
    
    if (isExist) {
        toast.error('This gadget is already in the wishlist!');
        return;
    }
    
    wishlist.push(gadget);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    toast.success('This gadget is added to the wishlist!');
};

// Remove an item from the wishlist
const removeWishlist = (gadgetId) => {
    let wishlist = getAllWishlist();
    const remainWishlist = wishlist.filter(gadget => gadget.product_id !== gadgetId); 
    localStorage.setItem('wishlist', JSON.stringify(remainWishlist));
    toast.success('Successfully removed from wishlist');
};



export { addCart, getAllCart, removeCart, addWishlist, getAllWishlist, removeWishlist };
