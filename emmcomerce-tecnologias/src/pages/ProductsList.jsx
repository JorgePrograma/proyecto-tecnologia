import React from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

function ProductsList() {
  return (
    <div className=''>
      <Navbar />
      <Announcement />
      <div className='bg-slate-100 py-2'>
        <h2 className='m-5 font-bold text-3xl'>Desses</h2>

        {/*Filtro */}
        <div className='flex justify-between items-center mx-5 text-xl '>
          <div className='flex gap-5 '>
            <div className='flex flex-col gap-2 border p-2 rounded-lg'>
              <h3 className='text-2xl font-bold text-center'>Filter Products:</h3>
              <div className='flex gap-5'>
                <div className='flex flex-col gap-2 shadow p-2 rounded-md'>
                  <p className='text-left font-extrabold'>Color</p>
                  <select className='p-2 rounded-md bg-white border border-black'>
                    <option disabled selected>Seleccione</option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>Green</option>
                  </select>
                </div>
                <div className='flex flex-col gap-2 shadow p-2 rounded-md'>
                  <p className='text-left font-extrabold'>Talla</p>
                  <select className='p-2 rounded-md bg-white border border-black'>
                    <option disabled selected>Seleccion</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className='flex gap-2'>
            <h3 className='text-xl font-semibold' >Ordenar:</h3>
            <select className='p-2 rounded-md bg-white border border-black'>
              <option disabled selected>Seleccione</option>
              <option>Price (asc)</option>
              <option>Price (desc)</option>
            </select>
          </div>
        </div>

        {/*Productos */}
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductsList;
