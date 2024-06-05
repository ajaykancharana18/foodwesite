import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Foodslider = ({cart}) => {

    let [foodState, setFoodState] = useState([])
   


    let foodData = () => {
        fetch('https://api.sampleapis.com/recipes/recipes')
            .then((res) => res.json())
            .then((response) => {
                setFoodState(response)
            })

    }

    useEffect(() => {
        foodData();
        // console.log(foodState)
    }, [])




    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };
    return (
        <div className=' w-[90%] mx-auto '>
            <p className='text-[30px] font-sans font-bold'>What's on your mind?</p>
            <div className='py-20 '>
                <Slider  {...settings}>
                    {
                        foodState.map((item, i) => (
                            <div key={item.id} className='my-4'>
                                <div className=' rounded-md mx-auto my-2 flex flex-col justify-center items-center'>
                                    <div className='mb-4'>
                                        <img className='w-[200px] h-[200px] object-cover p-2 rounded-full' src={item.photoUrl} />
                                    </div>
                                    <div className='text-[20px] mb-6 mx-2 text-center font-semibold flex flex-col justify-center items-center py-8'>
                                        {item.title}

                                        <button className=' absolute bottom-1 m-4 p-4 bg-black text-white font-semibold rounded-md hover:bg-orange-500 ' onClick={cart}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Foodslider