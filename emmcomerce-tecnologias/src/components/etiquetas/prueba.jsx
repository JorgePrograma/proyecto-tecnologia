import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextErrors from '../components/etiquetas/TextErrors';
import TextInputLabel from '../components/etiquetas/TextInputLabel';
import { RiLockPasswordLine } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom';


function Prueba() {
  const [cuenta, setCuenta] = useState({
    usuario: "", clave: ""
  });

  const { register, handleSubmit, reset, formState: { errors }, watch, clearErrors, getFieldState, setValue, unregister } = useForm();

  // limpia el campo especificado por el nombre

  const onSubmit = (data) => {
    console.log("datos de los inputs",data)
    console.log("datos de la cuenta",cuenta)
    handleReset()
  }

  // este limpia los campos
  const handleReset = () => {
    // este limpia los datos de la cuenta
    setCuenta({ usuario: "", clave: "" });
    // este limipia los campos
    reset();
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCuenta(prevState => ({
      ...prevState, [name]: value
    }));
    console.log(value)
  }

  return (
    <div className='bg-blue-500 flex flex-col h-4/5 w-72 rounded p-2 pb-5 gap-3'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-center text-3xl font-serif'>Inicio de sesion</h2>
          <img src='../assets/loguin.png' alt='imagen' className='h-20 w-20 -rotate-12' />
        </div>
        <div className='flex flex-col gap-2'>
          <TextInputLabel 
            label="usuario"
            type="text"
            {...register("usuario", {
              required: "El usuario es requerido.",
              maxLength: { value: 100, message: "El  usuario debe tener máximo 100 dígitos." },
              pattern: { value: /^[a-zA-Z ]+$/, message: "El usuario solo debe tener letras." }
            })}
            onChange={handleChange}
            value={cuenta.usuario}
            placeholder="Ingrese su correo"
            children={<RiLockPasswordLine />}
          />
          {errors.usuario && <TextErrors error={errors.usuario.message} />}

          <TextInputLabel
            label="clave"
            type="password"
            name="clave"
            id="clave"
            {...register("clave", {
              required: "La clave es requerida.",
              maxLength: { value: 100, message: "La clave debe tener máximo 100 dígitos." },
              pattern: { value: /^[a-zA-Z0-9]+$/, message: "La clave solo debe tener letras y números." }
            })}
            onChange={handleChange}
            value={cuenta.clave}
            placeholder="Ingrese su clave"
            children={<MdEmail />}
          />
          {errors.clave && <TextErrors error={errors.clave.message} />}

          <input className='border rounded-md p-1 bg-blue-400 text-2xl cursor-pointer hover:bg-blue-300 hover:text-blue-800' type={"submit"} value="Enviar" />
        </div>
      </form>
      <div className='flex gap-2 text-lg'>
        <spa>No tienes cuenta </spa>
        <Link to="registar" className=' text-green-400 underline hover:text-green-200'>registrarse</Link>
      </div>
    </div>
  )
}

export default Prueba
