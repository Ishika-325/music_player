'use client'
import React from 'react'
import Footer from '@/components/Footer'
import { Meteors } from '@/components/ui/meteors'
import { FormEvent, useState } from 'react'

function page() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    
    alert('message sent successfully!');
  };
  return (
    <>
    

    <div className=" p-4 min-h-screen flex flex-col justify-center items-center bg-gray-900 py-12 pt-36">
      <Meteors number={35} className="fixed inset-0 z-0 pointer-events-none" />
        <div className="max-[400px]:w-full w-sm sm:w-md md:w-lg xl:w-xl 2xl:w-2xl mx-auto flex flex-col gap-8 rounded-md m-auto ">
          <h1 className="text-center  text-2xl md:text-4xl lg:text-6xl font-bold">Contact Us</h1>
          <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>

          
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            
            
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required className="border border-neutral-800 focus:ring-4 focus:ring-teal-900 rounded-md p-2 bg-black" />
           
            
              <textarea  placeholder="Message" onChange={(e) => setMessage(e.target.value)} required rows={4} className="border border-neutral-800 focus:ring-4 focus:ring-teal-900 rounded-md p-2 bg-black" />
       
            <button type="submit" className="p-2 rounded-md border border-gray-500 w-fit px-6 bg-teal-500 hover:bg-teal-600">Send Message</button>
          </form>
        </div>

      
      
      
    </div>
   

      </>
  )
}

export default page
