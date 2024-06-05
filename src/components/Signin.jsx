import React from 'react'
import { FcGoogle } from 'react-icons/fc'

export default function Signin() {
    return (
        <div className='grid  lg:grid-cols-2  lg:w-[80%] mx-auto my-20'>
            <div className='flex justify-center items-center text-8 p-2'>
                <p className='font-bold text-2xl'>Let's get started with  <p className='text-[25px]  font-mono font-bold text-red-600'>yummy<span className='text-orange-500 text-[30px]'>FOOD <span className=' text-2xl text-black '>account.</span></span></p> </p>
            </div>
            <div className='flex flex-col mx-auto my-8 mt-4 rounded-2xl p-4 shadow-2xl'>
                <p className='text-4xl p-2 px-4 font-bold text-gray-600 '>Sign In</p>
                <form>
                    <div className='flex flex-col'>
                        <label className='  pl-6 pt-1 text-2xl font-semibold text-gray-600' for='fullname' >Full Name</label>
                        <input className='focus:outline-none focus:border-sky-300 p-2 m-4 border-2 border-gray-200 rounded-md' type='text' name='fullname' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='pl-6 pt-1 text-2xl font-semibold text-gray-600' for='email' >Email</label>
                        <input className='focus:outline-none focus:border-sky-300 p-2 m-4 border-2 border-gray-200 rounded-md' type='email' name='email' placeholder='You@Example.com' />
                    </div>
                    <div className=' flex justify-center px-4'>
                        <input className='mr-1 mt-1 w-4 h-4 accent-orange-400 cursor-pointer' type='checkbox' name='checkbox' />
                        <label className='text-sm' for='checkbox'>I agree to Zomato's Terms of Service, Privacy Policy and Content Policies</label>
                    </div>
                    <div className='text-center'>
                        <button className='w-[80%] bg-black hover:bg-orange-600 text-white text-2xl font-bold py-2 px-4 m-4 rounded-md hover:text-black'>
                            Sign In
                        </button>
                    </div>
                    <div className='flex justify-center'>
                        <button className='flex justify-center items-center p-2 gap-2 bg-slate-100 hover:bg-slate-200  rounded-md w-[80%] text-base font-semibold'>
                            <FcGoogle size={20} /> <span>Sign in with Google</span>
                        </button>
                    </div>
                    <p className='p-2 text-gray-600 '>New to yummyFOOD?<span className='text-orange-500 hover:text-red-600 cursor-pointer'> Log In</span></p>
                </form>
            </div>

        </div>
    )
}
