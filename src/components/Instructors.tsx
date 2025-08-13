'use client'
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { image } from 'motion/react-client'
function Instructors() {
    const data=[
        {
            id: 1,
            name: 'Elena Briggs',
            designation: 'Vocal Coach',
            // image:'./assets/drum-set.avif'
            image:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3& ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwf Hx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 2,
            name: 'Marcus Reid',
            designation: 'Guitar Instructor',
            image:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3& ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D %3D&auto=format&fit=crop&w=3540&q=80',

        },
        {
            id: 3,
            name: 'Julia Zhang',
            designation: 'Piano Teacher',
            image:'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8f Hww&auto=format&fit=crop&w=800&q=60',

        },
        {
            id:4,
            name: 'Andre Gomez',
            designation: 'Drumming Expert',
            image:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        }
    ]
  return (
    <div className='relative h-[40rem] overflow-hidden flex justify-center items-center'>
       <WavyBackground className='max-w-7xl mx-auto w-full flex flex-col justify-center items-center h-full'>
         <div className='flex flex-row mb-10 w-full justify-center items-center'>
            <AnimatedTooltip items={data}/>
         </div>
       </WavyBackground>  
    </div>
  )
}

export default Instructors
