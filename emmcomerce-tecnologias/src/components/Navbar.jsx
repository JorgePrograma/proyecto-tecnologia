import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsFillCartFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import Login from '../pages/Login';
import Carrito from './Carrito';
import ModalCustomer from './modals/ModalCustomer';

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [showModalCarrito, setShowModalCarrito] = useState(false);


  // operaciones para el modal loguin
  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }


  // operaciones para el modal carrito

  const handleShowModalCarrito = () => {
    setShowModalCarrito(true)
  }

  const handleCloseModalCarrito = () => {
    setShowModalCarrito(false)
  }
  return (
    <nav className="py-2 mx-3">
      <div className="flex items-center font-bold">

        {/* busqueda */}
        <div className="flex-1">
          <div className='flex gap-2 items-center'>
            <strong>EN</strong>
            <div className='border flex ml-5 p-1 rounded justify-center items-center'>
              <input type="text" className='px-2 my-1 outline-none font-serif' />
              <BiSearch className='font-bold text-2xl mx-2 cursor-pointer' />
            </div>
          </div>
        </div>

        {/* Nombre de la empresa */}
        <div className="flex-1 text-center text-3xl">
          <strong>Tecnology 2023</strong>
        </div>

        {/* menu */}
        <div className="flex-1 flex justify-end gap-4">
          <ul className='flex gap-3 text-3xl items-center'>
            <li>
              <NavLink to="/registrar" className='border hover:border-blue-300 px-2 py-2 rounded-xl' >Registrarse</NavLink>
            </li>
            <li>
              <NavLink to="/usuarios" className='border hover:border-blue-300 px-2 py-2 rounded-xl' >Usuarios</NavLink>
            </li>
            <li>
              <button className='border hover:border-blue-300 px-2 py-2 rounded-xl' onClick={handleShowModal}>Loguin</button>
            </li>
            <li>
              <button className='border hover:border-blue-300 px-2 py-2 rounded-xl flex ' onClick={handleShowModalCarrito}>
                <BsFillCartFill />
                <p className='text-base border rounded-full bg-blue-400 h-6 w-6 justify-center -my-1 flex'>4</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute">
        <ModalCustomer show={showModal} onClose={handleCloseModal}>
          <Login />
        </ModalCustomer>
      </div>

      <div className="absolute">
        <ModalCustomer show={showModalCarrito} onClose={handleCloseModalCarrito}>
          <Carrito />
        </ModalCustomer>
      </div>
    </nav>

  );
}

export default Navbar;
