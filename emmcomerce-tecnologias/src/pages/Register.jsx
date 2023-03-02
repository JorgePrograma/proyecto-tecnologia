import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import TextErrors from '../components/etiquetas/TextErrors';
import TextInputLabel from '../components/etiquetas/TextInputLabel';

import { BsTelephone } from 'react-icons/bs'
import { BiCalendarAlt } from 'react-icons/bi'
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { VscSymbolConstant } from 'react-icons/vsc';
import UsuarioService from '../services/usuarioServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import funciones from '../utils/funciones';

function Register() {
  const [cuenta, setCuenta] = useState({
    nombre: "", apellido: "", fecha_nacimiento: "", celular: "", correo: "", clave: "",
    direccion: "", tipo_dni: "", numero_dni: ""
  });
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm();

  const onSubmit = async () => {
    try {
      const data = await UsuarioService.createUsuario(cuenta);
      const mensaje = data.message;
      toast.success(mensaje);
      handleReset()
    } catch (error) {
      const mensaje = funciones.errores(error)
      if (mensaje) {
        toast.error(mensaje);
      }
    }
  }

  const handleReset = () => {
    setCuenta({
      nombre: "", apellido: "", fecha_nacimiento: "", celular: "", correo: "", clave: "",
      direccion: "", tipo_dni: "", numero_dni: ""
    });
    reset();
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "imagen") {
      setLoading(true);
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setCuenta((prevState) => ({
          ...prevState,
          imagen: event.target.result,
        }));
        setValue(name, value)
      };
      reader.readAsDataURL(file);
      setLoading(false)
    } else {
      setCuenta(prevState => ({
        ...prevState, [name]: value
      }));
      setValue(name, value);
    }
  }

  return (
    <div className='bg-blue-500 flex flex-col w-full h-screen rounded p-2 pb-5 gap-3 justify-center items-center'>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full justify-center items-center flex flex-col gap-5">
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-center text-3xl font-serif'>Registrarse en el sistema</h2>
          <img src='../assets/loguin.png' alt='imagen' className='h-20 w-20 -rotate-12' />
        </div>

        <div className='grid grid-cols-2 w-1/2 gap-5'>


          {/*tipo_dni*/}
          <div className='flex flex-col'>
            <TextInputLabel
              id="tipo_dni"
              name="tipo_dni"
              label="tipo Documento"
              type="text"
              {...register("tipo_dni", {
                required: "El tipo_dni es requerido.",
                maxLength: { value: 100, message: "El  tipo_dni debe tener máximo 100 dígitos." },
                pattern: { value: /^[a-zA-Z. ]+$/, message: "El tipo_dni solo debe tener letras." }
              })}
              onChange={handleChange}
              value={cuenta.tipo_dni}
              placeholder="Ingrese su tipo de documento"
              children={<VscSymbolConstant />}
            />
            {errors.tipo_dni && <TextErrors error={errors.tipo_dni.message} />}
          </div>

          {/*numero_dni*/}
          <div className='flex flex-col'>
            <TextInputLabel
              id="numero_dni"
              name="numero_dni"
              label="numero de identificacion"
              type="text"
              {...register("numero_dni", {
                required: "El numero_dni es requerido.",
                maxLength: { value: 100, message: "El  numero_dni debe tener máximo 100 dígitos." },
                pattern: { value: /^[0-9 ]+$/, message: "El numero_dni solo debe tener letras." }
              })}
              onChange={handleChange}
              value={cuenta.numero_dni}
              placeholder="Ingrese su numero de identificacion"
              children={<VscSymbolConstant />}
            />
            {errors.numero_dni && <TextErrors error={errors.numero_dni.message} />}
          </div>

          {/*direccion*/}
          <div className='flex flex-col'>
            <TextInputLabel
              id="direccion"
              name="direccion"
              label="direccion"
              type="text"
              {...register("direccion", {
                required: "El direccion es requerido.",
                maxLength: { value: 100, message: "El  direccion debe tener máximo 100 dígitos." },
              })}
              onChange={handleChange}
              value={cuenta.direccion}
              placeholder="Ingrese su direccion"
              children={<VscSymbolConstant />}
            />
            {errors.direccion && <TextErrors error={errors.direccion.message} />}
          </div>

          {/*nombre*/}
          <div className='flex flex-col'>
            <TextInputLabel
              id="nombre"
              name="nombre"
              label="nombre"
              type="text"
              {...register("nombre", {
                required: "El nombre es requerido.",
                maxLength: { value: 100, message: "El  nombre debe tener máximo 100 dígitos." },
                pattern: { value: /^[a-zA-Z ]+$/, message: "El nombre solo debe tener letras." }
              })}
              onChange={handleChange}
              value={cuenta.nombre}
              placeholder="Ingrese su correo"
              children={<VscSymbolConstant />}
            />
            {errors.nombre && <TextErrors error={errors.nombre.message} />}
          </div>

          {/*apellido*/}
          <div className='flex flex-col'>
            <TextInputLabel
              id="apellido"
              name="apellido"
              label="apellido"
              type="text"
              {...register("apellido", {
                required: "El apellido es requerido.",
                maxLength: { value: 100, message: "El  apellido debe tener máximo 100 dígitos." },
                pattern: { value: /^[a-zA-Z ]+$/, message: "El apellido solo debe tener letras." }
              })}
              onChange={handleChange}
              value={cuenta.apellido}
              placeholder="Ingrese su correo"
              children={<VscSymbolConstant />}
            />
            {errors.apellido && <TextErrors error={errors.apellido.message} />}
          </div>

          {/*fecha_nacimiento*/}
          <div className='flex flex-col'>
            <TextInputLabel
              id="fecha_nacimiento"
              name="fecha_nacimiento"
              label="fecha nacimiento"
              type="date"
              {...register("fecha_nacimiento", {
                required: "La fecha de nacimiento es requerida.",
              })}
              onChange={handleChange}
              value={cuenta.fecha_nacimiento}
              placeholder="Ingrese su fecha de nacimiento"
              children={<BiCalendarAlt />}
            />
            {errors.fecha_nacimiento && <TextErrors error={errors.fecha_nacimiento.message} />}
          </div>

          {/*celular*/}
          <div className='flex flex-col'>
            <TextInputLabel
              id="celular"
              name="celular"
              label="celular"
              type="text"
              {...register("celular", {
                required: "El celular es requerido.",
                maxLength: { value: 100, message: "El  celular debe tener máximo 100 dígitos." },
                pattern: { value: /^[0-9 ]+$/, message: "El celular solo debe tener letras." }
              })}
              onChange={handleChange}
              value={cuenta.celular}
              placeholder="Ingrese su correo"
              children={<BsTelephone />}
            />
            {errors.celular && <TextErrors error={errors.celular.message} />}
          </div>

          {/*correo*/}
          <div className='flex flex-col'>
            <TextInputLabel
              id="correo"
              name="correo"
              label="correo"
              type="text"
              {...register("correo", {
                required: "El correo es requerido.",
                maxLength: { value: 100, message: "El  correo debe tener máximo 100 dígitos." },
                pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'El correo no es valido.' }
              })}
              onChange={handleChange}
              value={cuenta.correo}
              placeholder="Ingrese su correo"
              children={<AiOutlineMail />}
            />
            {errors.correo && <TextErrors error={errors.correo.message} />}
          </div>

          {/*clave*/}
          <div className='flex flex-col'>
            <TextInputLabel
              id="clave"
              name="clave"
              label="clave"
              type="password"
              {...register("clave", {
                required: "La clave es requerida.",
                maxLength: { value: 100, message: "La clave debe tener máximo 100 dígitos." },
                minLength: { value: 4, message: 'ELa clave debe tener más de 4 caracteres' },
                pattern: { value: /^[a-zA-Z0-9]+$/, message: "La clave solo debe tener letras y números." }
              })}
              onChange={handleChange}
              value={cuenta.clave}
              placeholder="Ingrese su clave"
              children={<RiLockPasswordLine />}
            />
            {errors.clave && <TextErrors error={errors.clave.message} />}
          </div>


          {/*imagen
          <div className='flex flex-col col-span-2'>
            <TextInputLabel
              id="imagen"
              name="imagen"
              label="imagen"
              type="file"
              {...register("imagen", {
                required: "La imagen es requerida.",
              })}
              onChange={handleChange}
              placeholder="Ingrese su imagen"
              children={<RiLockPasswordLine />}
            />
            {errors.imagen && <TextErrors error={errors.imagen.message} />}
            {loading && <span>cargando ....</span>}
            {cuenta.imagen && <img className='w-28 h-28' src={cuenta.imagen} alt='imagen' />}
          </div>
          */}


          <input className='border rounded-md p-1 bg-blue-400 text-2xl cursor-pointer hover:bg-blue-300 hover:text-blue-800'
            type="submit" value="Enviar" />
        </div>

      </form>
      <div className='flex gap-2 text-lg'>
        <spa>No tienes cuenta </spa>
        <Link to="registar" className=' text-green-400 underline hover:text-green-200'>registrarse</Link>
      </div>
    </div>
  )
}

export default Register
