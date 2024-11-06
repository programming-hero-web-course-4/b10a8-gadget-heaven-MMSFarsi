import React from 'react'

const Button = ({btnInside}) => {
  return (
    <div>
        <button className='px-4 py-3 bg-white rounded-3xl text-[#9538E2] font-bold '>{btnInside}</button>
    </div>
  )
}

export default Button