'use client'
import { div } from 'motion/react-client'
import React from 'react'
import { useState } from 'react'

function page() {
    const[name,setName]=useState("");
    const[phone,setPhone]=useState("");
    const handleEvent=()=>{
      const regex=/^(?:\+?91[-\s]?|0)?[6-9]\d{9}$/;
        if(name==""){
            alert("Please fill the form ");
            return;
        }else if(!phone.match(regex)){
          alert("you should have to enter a valid phone number");
          setPhone("");
          return;
        }
        alert(`hey!${name},your response is Submitted`)
    }
  return (
    <div className='flex flex-col justify-center items-center bg-[url(../../public/musicSchool.jpeg)]  h-screen bg-no-repeat bg-cover backdrop-brightness-50 bg-bottom w-full mx-auto'>
         <div className="absolute inset-0 bg-black/30"></div>
        <div className='text-center flex flex-col justify-center items-center bg-gray-600 w-[35rem] rounded-3xl h-[50em] my-20 z-10 '>
          <div className='w-[26rem] text-left'>
            <h2 className='font-bold text-2xl text-red-300 '>Note :</h2>
             <p className=''>Have questions about our classes, schedules, or programs? Fill out the form below and our team will get back to you with all the details you need to start your musical journey</p>
           </div>
        <div className='border-[2px] border-amber-300 rounded-3xl w-[25rem] h-15 text-center mt-4'>
           <h2 className='text-3xl my-2 '>Contact-Us Here</h2>
        </div>
     <div className='my-4 flex flex-row justify-center items-center'> {/* Input fields of the form */}
         <div className='my-4 text-left flex flex-col'>
        <label htmlFor="name" className='mx-2 my-4 text-[1.25rem]' >Name : </label>
        <label htmlFor="phone" className='mx-2 my-4 text-[1.25rem]'>Phone Number : </label>
      </div>
      <div className='flex flex-col' >
        <input type="text" id='name' placeholder='Enter your name here....' onChange={e=>setName(e.target.value)} className='focus:outline-1 focus:outline-amber-300 rounded-2xl h-8 px-2 border-[0.25px] my-4'/>
       <input type="tel" id='phone' placeholder='Your contact number....' onChange={e=>setPhone(e.target.value)}  className='focus:outline-1 focus:outline-amber-300 rounded-2xl h-8 px-2 border-[0.25px] my-4' />
      </div>
     </div>
     <button type='submit' onClick={handleEvent} className='my-4 border-2 rounded-2xl w-[100px] h-[35px] hover:bg-blue-400'>Submit</button>
    </div>
    </div>
  )
}

export default page
//Phone number  
//Name:   