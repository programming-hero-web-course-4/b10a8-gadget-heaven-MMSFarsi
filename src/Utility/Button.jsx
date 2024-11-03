import React from 'react'

const Button = ({btnInside}) => {
  return (
    <div>
        <button className='px-3 py-3 bg-white rounded-xl text-[#9538E2] font-bold '>{btnInside}</button>
    </div>
  )
}

export default Button