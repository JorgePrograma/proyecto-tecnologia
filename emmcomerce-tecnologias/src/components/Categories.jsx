import React from 'react';
import { categories } from '../utils/Data/constantespruebas';
import CategoriaItem from './CategoriaItem';

function Categories() {
  return (
    <div className='flex p-5 justify-between'>
      {categories.map((item) => (
        <CategoriaItem item={item} key={item.id}/>
      ))}
    </div>
  );
}

export default Categories;
