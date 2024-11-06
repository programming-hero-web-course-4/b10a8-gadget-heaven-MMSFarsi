import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

const Reviews = () => {
  const data=useLoaderData()

  return (
    <>
    <div className="w-full h-[250px] bg-[#9538E2] text-white">
    <h2 className="text-3xl text-center font-bold pt-10">Customar Review</h2>
    <p className="text-center mt-2 max-w-[700px] mx-auto">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
    </p>
   
</div>
     <div className="p-4 bg-white rounded-lg shadow-md max-w-[800px] mx-auto">
    
      <div>
      <ul className='flex flex-col gap-4'>
         {data.map((review) => (
          <li key={review.id} className="mb-6 border-b pb-4">
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
    </>
  )
}

export default Reviews