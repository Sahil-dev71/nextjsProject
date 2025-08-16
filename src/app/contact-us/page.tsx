'use client'
import { div, input } from 'motion/react-client'
import React, { useEffect } from 'react'
import { useState } from 'react'

function page() {
    const[name,setName]=useState("");
    const[phone,setPhone]=useState("");
    const [mounted,setMounted]=useState(false);
    useEffect(()=>{
      setMounted(true)
    },[])
    if(!mounted){
      return null;
    }
    const handleEvent=()=>{
      const regex=/^(?:\+?91[-\s]?|0)?[6-9]\d{9}$/;
        if(name==""||phone==""){
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
    <div className=' justify-center items-center bg-[url(../../public/musicSchool.jpeg)] h-svh bg-no-repeat bg-cover backdrop-brightness-50 bg-bottom w-full mx-auto'>
         <div className="absolute inset-0 bg-black/30"></div> {/* this div is for reducing brightness of image */}
       <div className='flex justify-center items-center'>
         <div className='text-center flex flex-col justify-center items-center bg-gray-600  rounded-3xl  my-20 z-10 w-[50%] sm:w-[25%]'> {/*h-[50em] w-[35rem] */}
          <div className='text-centre'> {/*w-[26rem] */}
            <h2 className='font-bold text-2xl text-red-300 '>Note :</h2>
             <p className=''>Have questions about our classes, schedules, or programs? Fill out the form below and our team will get back to you with all the details you need to start your musical journey</p>
           </div>
        <div className='sm:border-[2px] border-[1px] border-amber-300 rounded-3xl  sm:h-15 text-center my-4 '> {/* w-[25rem]*/}
           <h2 className='sm:text-2xl m-2 '>Contact-Us Here</h2>
        </div>
     <div className='my-4 flex flex-row justify-center items-center'> {/* Input fields of the form */}
      <div className='my-4 text-left flex flex-col'>
        <label htmlFor="name" className='mx-2 my-4 sm:text-[1.25rem]' >Name : </label>
        <label htmlFor="phone" className='mx-2 my-4 sm:text-[1.25rem]'>Phone Number : </label>
      </div>
      {/*
      <div className='flex flex-col flex-wrap' >
        <input type="text" id='name' value={name} placeholder='Enter your name here....' onChange={e=>setName(e.target.value)} className='focus:outline-1 focus:outline-amber-300 rounded-2xl sm:h-8 px-2 border-[0.25px] my-4'/>
       <input type="tel" id='phone' value={phone} placeholder='Your contact number....' onChange={e=>setPhone(e.target.value)}  className='focus:outline-1 focus:outline-amber-300 rounded-2xl sm:h-8 px-2 border-[0.25px] my-4' />
      </div> */}
      <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
  {/* <label htmlFor="name" className="text-sm font-medium">
    Name
  </label> */}
  <input
    type="text"
    id="name"
    placeholder="Enter your name here..."
    className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
    value={name}
    onChange={e=>setName(e.target.value)}
  />
  {/* <label htmlFor="phone" className="text-sm font-medium">
    Phone
  </label> */}
  <input
    type="tel"
    id="phone"
    placeholder="Your contact number..."
    className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
    value={phone}
    onChange={e=>setPhone(e.target.value)}
    />
</div>

     </div>
     <button type='submit' onClick={handleEvent} className='my-4 border-2 rounded-2xl sm:w-[100px] sm:h-[35px] hover:bg-blue-400'>Submit</button>
    </div>
       </div>
    </div>
  )
}

export default page
//Phone number  
//Name:   