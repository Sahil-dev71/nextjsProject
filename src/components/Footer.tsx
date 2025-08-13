import React from 'react'

function Footer() {
  return (
    <div>
    <footer>
        <div className='bg-gray-700 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 h-[15rem] text-center py-6'>
            <div className='w-[11rem] mx-8 text-center flex flex-col justify-center items-center'>
              <h4 className='font-bold'>About-us</h4>
              <p className=' max-auto text-center mt-2 '>
                Inspiring a love for music through lessons, passion, and creativity for all ages</p>
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
