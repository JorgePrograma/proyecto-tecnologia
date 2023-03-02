import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { GrFavorite } from 'react-icons/gr';

function Product({ item }) {
  return (
    <div className='flex flex-1 min-w-[20%] h-92 justify-center items-center relative bg-blue-50 m-2'>
      <div className='w-52 h-52 rounded-full absolute text-white'></div>
      <img className='h-3/4' src={item.img} alt={item.title}/>
      <div className='absolute w-full h-full top-0 left-0 flex justify-center items-center transition-all delay-150 cursor-pointer gap-3 hover:opacity-100 opacity-0'>
        <BsCart3 className='bg-red-500- rounded-full justify-center items-center p-3 w-12 h-12 text-2xl bg-white hover:bg-sky-400' />
        <AiOutlineSearch className='bg-red-500- rounded-full justify-center items-center p-3 w-12 h-12 bg-white hover:bg-sky-400' />
        <GrFavorite className='bg-red-500- rounded-full justify-center items-center p-3 w-12 h-12 bg-white hover:bg-sky-400' />
      </div>
    </div>
  );
}

export default Product;
