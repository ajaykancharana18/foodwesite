import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

export default function Hero() {

    let [slide, setSlide] = useState(0)

    let slideLeft = () => {
        setSlide(slide === 0 ? imgData.length - 1 : slide - 1)
    }

    let slideRight = () => {
        setSlide(slide === imgData.length - 1 ? 0 : slide + 1)

    }



    let imgData = [
        {
            url: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/intro-1662064407.webp'
        },

        {
            url: 'https://www.tastingtable.com/img/gallery/20-best-restaurants-in-chicago-ranked/evettes-1677771013.webp'
        },

        {
            url: 'https://www.tastingtable.com/img/gallery/20-best-restaurants-in-chicago-ranked/avec-1677771013.webp'
        }
    ]

    useEffect(() => {
        let clear = setInterval(() => {
            slideRight();
        }, 3000)

        return () => clearInterval(clear)

    }, [slide])



    return (

        <div className='min-[300px]:w-[100%] lg:w-[80%] h-auto mx-auto my-16 py-2 rounded-2xl relative cursor-pointer'>

            {<div>
                <img className='mx-auto rounded-2xl object-fill min-[300px]:h-auto  w-full md:h-[400px] h-[450px] my-8' src={imgData[slide].url} />

            </div>}



            <div className='flex justify-between absolute w-full top-[50%] text-white'>
                <FaChevronLeft size={40} onClick={slideLeft} />
                <FaChevronRight size={40} onClick={slideRight} />
            </div>

            <div className=' text-center w-[90%] absolute top-[45%] left-[5%] right-[5%] '>
                <p className='text-white font-semibold sm:text-[15px] lg:text-[30px] '>Welcome to the<span className='text-orange-500'> Tasty & Fresh </span>food.</p>
            </div>
        </div>


    )
}

