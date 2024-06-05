import React, { useState } from 'react'
import { FaBars, FaCartShopping } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

export default function Header({count}) {

    let [sideNav, setSideNav] = useState(false)



    return (
        <div className='fixed z-50 w-full top-0'>
            <div className='flex justify-between py-2 px-4 bg-slate-50'>
                <div className='top-[50%] cursor-pointer'>
                    <p className='text-[25px]  font-mono font-bold text-red-600'>yummy<span className='text-orange-500 text-[30px]'>FOOD</span></p>
                </div >

                <div className='top-[50%] hidden md:block'>
                    <ul className='flex gap-6 py-2 cursor-pointer text-[17px] font-semibold'>
                        <Link to='/' > <li className='hover:text-orange-500 text-black'>Home</li></Link>
                        <Link to='/aboutUs'><li className='hover:text-orange-500  text-black'>About Us</li></Link>
                        <Link to='/ourfood'><li className='hover:text-orange-500  text-black'>Our food</li></Link>
                        <Link to='/signin'><li className='hover:text-orange-500  text-black'>Sign In</li></Link>
                    </ul>
                </div>

                <div className={`absolute flex flex-col z-40  bg-slate-50 top-[67px] right-0 h-[100vh] w-[50%] text-center sm:visible md:invisible  ${sideNav ? '' : "hidden"}`}>
                    <ul className='cursor-pointer text-[17px] font-semibold m-5'>
                        <Link to='/' > <li className='hover:text-orange-500 py-6 font-bold text-[30px]' onClick={() => setSideNav(false)}>Home</li></Link>
                        <Link to='/aboutUs'><li className='hover:text-orange-500 font-bold py-6 text-[30px]' onClick={() => setSideNav(false)}>About Us</li></Link>
                        <Link to='/ourfood'><li className='hover:text-orange-500 font-bold py-6 text-[30px]' onClick={() => setSideNav(false)}>Our food</li></Link>
                        <Link to='/signin'><li className='hover:text-orange-500 font-bold py-6 text-[30px]' onClick={() => setSideNav(false)}>Sign In</li></Link>
                    </ul>
                </div>


                <div className='sm:visible md:invisible lg:invisible absolute right-3 py-2'>
                    <div className={`top-[50%] cursor-pointer  ${sideNav ? '' : "hidden"}`} onClick={() => setSideNav(!sideNav)}>
                        <RxCross2 size={30} />
                    </div><div className={`top-[50%] cursor-pointer  ${sideNav ? "hidden" : ''}`} onClick={() => setSideNav(!sideNav)}>
                        <FaBars size={30} />
                    </div>
                </div>

                <div className='relative right-16  flex flex-col justify-center items-center'>
                    {count}
                    <FaCartShopping size={35} />
                </div>

            </div>
        </div>
    )
}





