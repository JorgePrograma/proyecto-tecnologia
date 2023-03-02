import React from 'react';
import { popularProducts } from '../utils/Data/constantespruebas';
import Product from './Product';

function Products({ item }) {
  return (
    <div className='flex p-5 flex-wrap justify-between '>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Products;
