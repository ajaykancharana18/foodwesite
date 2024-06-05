import React from 'react'
import { GrAppleAppStore } from 'react-icons/gr'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

export default function Delivery() {
    return (
        <div>
            <div className='grid grid-cols-2 w-[90%] mx-auto my-8  max-[780px]:flex max-[780px]:flex-wrap'>
                <img className='' src='./images/foodimg.jpeg' />
                <div className='flex flex-wrap justify-center items-center'>
                    <p className=' w-full text-[30px] sm:text-[50px]  pb-0 text-center font-mono font-bold text-red-600 '>yummy<span className='text-orange-500'>FOOD</span> <span className='font-sans'>is now available on</span> </p>
                    <div className=' flex justify-center items-center  mx-8 my-4 gap-8 '>
                    <IoLogoGooglePlaystore size={80}  fill='#056559 '/>
                    <GrAppleAppStore size={80}  fill='#0088cc'/>
                    </div>
                </div>
            </div>

        </div>
    )
}
