import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import { Helmet } from 'react-helmet';

const Reviews = () => {
  const data=useLoaderData()

  return (
    <div className='bg-[rgba(9,8,15,0.05)] pb-16'>
       <Helmet><title>Reviews || Gadget Zone</title></Helmet>
    <div className="w-full h-[250px] bg-[#9538E2] mb-10 text-white">
    <h2 className="text-3xl text-center font-bold pt-10">Customer Review</h2>
    <p className="text-center mt-2 max-w-[700px] mx-auto">
    We value our customers' opinions! Browse through real reviews from users who have tried and tested our gadgets, and get all the information you need to make the right choice.
    </p>
   
</div>
     <div className="p-4 bg-white rounded-lg shadow-md max-w-[800px] mx-auto">
    
      <div>
      <ul className="flex flex-col p-5 space-y-6">
  {data.map((review) => (
    <li key={review.id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-gray-800">{review.name}</h3>
        <span className="text-sm text-gray-500">{review.date}</span>
      </div>
      <ReactStars
        count={5}
        value={review.rating}
        size={20}
        edit={false}
        color2="#FFD700"
      />
      <p className="text-gray-700 mt-2">{review.comment}</p>
    </li>
  ))}
</ul>

     </div>
    </div>
    </div>
  )
}

export default Reviews