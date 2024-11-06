import React from 'react'

const Button = ({btnInside}) => {
  return (
    <div>
        <button className='px-4 py-2 border border-[#9538E2] bg-white rounded-3xl text-[#9538E2] font-bold '>{btnInside}</button>
    </div>
  )
}

export default Button