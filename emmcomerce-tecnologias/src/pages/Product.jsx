import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';

function Product() {
  return (
    <div className=''>
      <Navbar />
      <Announcement />
      <div className='p-16 grid grid-cols-2 gap-16'>
        {/* Imagen del producto */}
        <div className='flex-1'>
          <img className='w-full h-screen object-cover' alt="imagen" src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </div>

        {/* Datos del producto */}
        <div className='flex-1 gap-5 flex flex-col'>
          <h2 className='font-extralight text-5xl'>Denin jumpsuit</h2>
          <p className='my-5 text-xl text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.</p>
          <span className='font-thin text-5xl'>$ 20</span>

          <div className='w-1/2 flex justify-between'>
            {/* Color del producto */}
            <div className='flex items-center gap-3'>
              <span className='text-xl font-thin'>Color</span>
              <div className='flex gap-2'>
                <div className='w-5 h-5 rounded-full mx-0 my-5 cursor-pointer flex gap-3 bg-yellow-300 hover:bg-yellow-500'>
                </div>
                <div className='w-5 h-5 rounded-full mx-0 my-5 cursor-pointer flex gap-3 bg-blue-300 hover:bg-blue-500'>
                </div>
                <div className='w-5 h-5 rounded-full mx-0 my-5 cursor-pointer flex gap-3 bg-red-300 hover:bg-red-500'>
                </div>
              </div>
            </div>

            {/* Talla del producto */}
            <div className='flex justify-center items-center gap-2'>
              <strong className='ml-3 p-2 text-2xl'>Size</strong>
              <select className='p-2 rounded-md bg-white border border-black'>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>

          {/* Cantidad y boton agregar al carrito */}
          <div className='w-1/2 flex items-center justify-between '>
            <div className='flex items-center font-bold gap-2'>
              <span className='w-8 h-8  text-2xl flex items-center justify-center mx-0 my-2 cursor-pointer '>-</span>
              <span className='w-8 h-8 rounded-lg text-2xl border border-gray-600 flex items-center justify-center mx-0 my-2'>5</span>
              <span className='w-8 h-8  text-2xl flex items-center justify-center mx-0 my-2 cursor-pointe'>+</span>
            </div>
            <button className='border p-3 rounded-3xl hover:bg-blue-500 border-solid border-green-600'>agregar al carrito</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Product;
