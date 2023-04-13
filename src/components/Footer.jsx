import React from 'react';
import { FaFacebook} from "react-icons/fa";
import { FiInstagram} from "react-icons/fi";
import {FaTelegramPlane} from "react-icons/fa";
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className='max-w-[1640px] mx-auto p-4 bg-orange-600 '>
        <div className='max-h-[500px]  p-5  gap-10 grid grid-cols-2 lg:grid-cols-4  justify-center'>
          <div className=' p-3'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 mb-2'>
          Best <span className='font-bold '>Eats</span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className='p-2'>
            <div>
            <h1 className=' font-bold'>Delivery</h1>
            <p>sunday-thursday</p>
            <p>10:00am - 12:00pm</p>
            </div>
            <div className='mt-2'>
            <h1 className=' font-bold'>Friday-Saturday</h1>
            <p>Off day</p>

            </div>

          </div>
          <div className=''>
          <h1 className=' font-bold'>Contact</h1>
          <p>Location:Arak City,Iran</p>
          <div  className='mt-2'>
          <h1 className=' font-bold'>Phone:09217509248</h1>
          <h1 className='mt-1 font-bold'>Email:lorem</h1>
          </div>
          </div>
          <div className='sm:grid-cols1'>
          <h1 className=' font-bold'>Newsletters</h1>
          <p className='mt-2'>Please follow us on social medias:</p>
          <div className='mt-2 grid grid-cols-3'>
          <FaFacebook/>
          <FiInstagram/>
          <FaTelegramPlane/>
          </div>
          </div>
          

        </div>
        <div className='border-black border-t-2 p-2 flex justify-center'>
        <p className='mr-1 '> Copyright ,{year} website made by mohammad peyvasteh.All rights Resserved</p>
        <AiOutlineCopyrightCircle/>

        </div>
        </div>
        
    
  )
}
