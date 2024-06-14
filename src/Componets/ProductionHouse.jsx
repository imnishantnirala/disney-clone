import React from 'react'

import disney from './../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import nationalG from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwar from './../assets/images/starwar.png'

export const ProductionHouse = () => {

    const productionHouseList = [
        {
            id:1,
            Image:disney,
            video: 'empty'
        },
        {
            id:2,
            Image:marvel,
            video: 'empty'
        },
        {
            id:3,
            Image:nationalG,
            video: 'empty'
        },
        {
            id:4,
            Image:pixar,
            video: 'empty'
        },
        {
            id:5,
            Image:starwar,
            video: 'empty'
        },
    ]

  return (
    <div className='flex gap-2 md:gap-5 p-2 md:px-16 '>

        {productionHouseList.map( (item)=> (

            <div className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300
                ease-in-out cursor-pointer relative shadow-xl 
                shadow-gray-800'>
                <img src={item.Image} className='w-full z-[1] opacity-100' />
            </div>

        ))}
    </div>
  )
}
