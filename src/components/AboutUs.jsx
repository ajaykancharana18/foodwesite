import React from 'react'

export default function AboutUs() {
    return (
        <div className='grid grid-cols-1 w-[80%] mx-auto my-16'>
            <div>
                <div className='h-auto'>
                <p className=' text-[40px] md:text-[40px] text-center font-mono font-bold text-red-600'>yummy<span className='text-orange-500 text-[50px] md:text-[50px]'>FOOD</span></p>
                </div>
                <div className='flex justify-center items-center my-4'>
                    <img className='w-full md:h-[470px]' src='https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg' />
                </div>
                <div className='grid grid-cols-2 gap-2 my-2 h-[500px] overflow-hidden'>
                    <div className='flex flex-col'>
                        <div>
                            <img src='https://zomatoblog.com/wp-content/uploads/2024/04/image.png' />
                        </div>
                        <div className='px-2'>
                            <span className=' text-[15px] md:text-[30px] font-bold'>Menu Score: How we cracked the Menu Code (and you can too!)</span>
                            <p className='text-[10px] md:text-[15px]'>
                                Menu is one of the most important elements that defines a restaurant. Most restaurants tend to spend a disproportionate time creating a winning menu. In interactions with our restaurant partners as well, some questions we frequently hear are: “How do I make my menu more attractive? What changes can I make to my menu to improve orders from customers?”
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <div>
                            <img src='https://zomatoblog.com/wp-content/uploads/2024/04/Hackoween.png' />
                        </div>
                        <div className='px-2'>
                            <span className='text-[15px] md:text-[30px] font-bold'>Hackoween: Cybersecurity resilience through competitive challenges</span>
                            <p className='text-[10px] md:text-[15px] '>
                            At Zomato, our tech teams are always working towards creating innovative solutions and ensuring we have adequate security measures in place that uphold them. This commitment led us to recently organize an event, Capture The Flag (CTF), that was aimed at teaching security concepts to our developers in a practical and fun way. Taking learnings from our internal security audits and our active bug bounty program, it became evident that for building robust applications, developers required a thorough grasp of frequently encountered security weaknesses and that is why we created Hackoween a security hackathon.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
