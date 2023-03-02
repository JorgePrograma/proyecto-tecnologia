import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
function Newsletter() {
  return (
    <div className='flex flex-col gap-4 h-3/4 py-20 bg-lime-200 items-center justify-center'>
      <h2 className='text-7xl font-bold'>Newsletter</h2>
      <p className='text-2xl font-light'> Get timely updates from your favorite products.</p>
      <div className='flex p-2'>
        <input className='outline-none p-2' placeholder='Ingrese su email' />
        <button className='outline-none bg-teal-900 text-white w-10 flex place-items-center justify-center hover:bg-teal-700'><AiOutlineSend className='text-xl'/></button>
      </div>
    </div>
  );
}

export default Newsletter;
