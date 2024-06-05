import React from 'react'
import { Link } from 'react-router-dom'

export default function Downfoot() {
    return (
        <div>
            <div className='bg-black w-full h-auto flex flex-wrap justify-center gap-12 mx-auto py-4 font-sans text-[#FFFFFF99]  '>
                <div className=''>
                    <p className='text-[25px]  font-mono font-bold text-red-600'>yummy<span className='text-orange-500 text-[30px]'>FOOD</span></p>
                    <p className=''>© 2024 Bundl Technologies Pvt.Ltd</p>
                </div>
                <div >
                    <ul>
                        <li className='font-bold text-white'>Company</li>
                        <Link to={'/aboutUs'}><li>About</li></Link>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>yummyFOOD One</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                   <ul >
                   <li className='font-bold text-white'>Contact Us</li>
                   <li>Help & Support</li>
                   <li>Partner with us</li>
                   <li>Ride with us</li>
                   </ul>
                </div>
                <div>
                   <ul >
                   <li className='font-bold text-white'>Legal</li>
                   <li>Terms & Conditions</li>
                   <li>Cookie Policy</li>
                   <li>Privacy Policy </li>
                   </ul>
                </div>
                <div>
                   <ul >
                   <li className='font-bold text-white'>We deliver to:</li>
                   <li>Banglore</li>
                   <li>Chennai</li>
                   <li>Hyderabad </li>
                   <li>Delhi</li>
                   <li>Munbai</li>
                   <li>more....</li>
                   </ul>
                </div>
            </div>
        </div>
    )
}
