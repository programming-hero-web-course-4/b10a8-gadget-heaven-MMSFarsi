import { MdDeleteForever } from "react-icons/md";

const CartCard = ({ gadget,handleRemove }) => {

    const { product_id,
        product_title,
        product_image,
        category,
        price,
        description,
        specification,
        availability,
        rating } = gadget;
       
    return (
        <div class="flex items-center p-4 mt-5  bg-white rounded-lg shadow-md w-[800px] mx-auto">
    
        <div class="w-16 h-16 bg-gray-300 rounded-md">
            <img className="object-cover h-full" src={product_image} alt="" />
        </div>
    
       
        <div class="ml-4 flex-1">
            <h2 class="text-lg font-semibold text-gray-800">{product_title}</h2>
            <p class="text-sm text-gray-500">{description}</p>
            <p class="text-md font-bold text-gray-700">Price: ${price}</p>
        </div>
    
    
        <div onClick={() => handleRemove(product_id)} className="ml-4 text-xl text-red-500 cursor-pointer">
                <MdDeleteForever />
            </div>
    </div>
    
    )
}

export default CartCard