import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTelegramPlane } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { ImLocation2 } from 'react-icons/im';

function Footer() {
  return (
    <div className='grid grid-cols-3 gap-10 mt-20 m-10 text-xl'>
      <div className='flex flex-col flex-1 gap-6'>
        <h2 className='font-bold text-2xl'>Tecnologias</h2>
        <p className=' text-justify'>There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</p>

        <div className='flex gap-2'>
          <FaFacebookF className='bg-blue-800 text-white text-4xl rounded-full m-1 p-2' />
          <FaInstagram className='bg-red-500 text-white text-4xl rounded-full m-1 p-2' />
          <FaTelegramPlane className='bg-blue-400 text-white text-4xl rounded-full m-1 p-2' />
          <FaPinterestP className='bg-red-600 text-white text-4xl rounded-full m-1 p-2' />
        </div>
      </div>

      <div className='flex flex-col flex-1 gap-6 g-10'>
        <h2 className='font-bold text-2xl'>Useful Links</h2>
        <ul className='flex flex-wrap list-none'>
          <li className='w-1/2'>Home</li>
          <li className='w-1/2'>Cart</li>
          <li className='w-1/2'>Man Fashion</li>
          <li className='w-1/2'>Woman Fashion</li>
          <li className='w-1/2'>Accessories</li>
          <li className='w-1/2'>My Account</li>
          <li className='w-1/2'>Order Tracking</li>
          <li className='w-1/2'>Wishlist</li>
          <li className='w-1/2'>Wishlist</li>
          <li className='w-1/2'>Terms</li>
        </ul>
      </div>

      <div className='flex flex-col flex-1 gap-6 g-10'>
        <h2 className='font-bold text-2xl'>Contact</h2>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-2'>
            <ImLocation2 className='text-3xl' />
            <p>Momil cordoba</p>
          </div>
          <div className='flex items-center gap-2'>
            <BsFillTelephoneFill className='text-3xl' />
            <p>3127597560</p>
          </div>
          <div className='flex items-center gap-2 '>
            <HiOutlineMail className='text-3xl'/>
            <p>Contacto@gmail.com</p>
          </div>
          <div className='flex items-center gap-2'>
            <img src="../assets/payment.png" alt='imagen'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
