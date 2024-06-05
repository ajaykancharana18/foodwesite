import React from 'react'
import Hero from './Hero'
import Delivery from './Delivery'
import Foodslider from './Foodslider'

export default function Home({cart}) {
    return (
        <div>
            <Hero/>
            <Delivery/>
            <Foodslider cart = {cart}/>
        </div>
    )
}
