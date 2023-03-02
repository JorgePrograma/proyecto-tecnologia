import React from 'react';

function CategoriaItem({ item }) {
  return (
    <div className='flex-1 m-1 relative'>
      <img className='w-full h-3/4' src={item.img} alt={item.title}/>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
        <h2 className='mb-5 text-white'>{item.title}x|</h2>
        <button className='rounded-full border-2 border-teal-700 bg-slate-200 p-4 text-gray-700 font-sans text-3xl cursor-pointer 
        hover:bg-slate-300 hover:delay hover:transition-opacity'>Shop now</button>
      </div>
    </div>
  );
}

export default CategoriaItem;
