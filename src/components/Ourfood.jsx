import React, { useEffect, useState } from 'react'

export default function Ourfood({ cart }) {

    let [fooddet, setFoodDet] = useState([])

    let foodDetails = () => {
        fetch('https://api.sampleapis.com/recipes/recipes')
            .then((res) => res.json())
            .then((response) => {
                setFoodDet(response)
            })
    }

    useEffect(() => {
        foodDetails();
        console.log(fooddet)
    }, [])

    return (
        <div className=' w-[95%] mx-auto my-20'>
            <p className='text-[30px] text-center font-bold'>Our <span className='text-red-600'>yummy</span><span className='text-orange-500'>FOOD</span></p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-2 '>
                {
                    fooddet.map((item) => (
                        <div key={item.id}>
                            <div className=' my-2 bg-white-500 h-[480px] rounded-2xl shadow-2xl'>
                                <div className='flex flex-col justify-center items-center m-4  p-4 '>
                                    <div className='m-4'>
                                        <img className='w-[200px] h-[200px] object-cover rounded-2xl' src={item.photoUrl} />
                                    </div>
                                    {<div className='p-4 h-[150px] text-[20px] font-sans font-semibold text-center'>
                                        {item.title}
                                        {item.tags}
                                    </div>}
                                    <div className='my-2'>
                                        <button className='p-2 bg-black text-white hover:bg-orange-500  font-semibold rounded-md ' onClick={cart}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>

                            </div>


                        </div>
                    ))
                }
            </div>
        </div>
    )
}
