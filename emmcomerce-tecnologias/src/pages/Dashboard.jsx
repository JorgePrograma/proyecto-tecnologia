import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Table from '../components/Table';
import CategoriaService from '../services/categoriaServices';
import axiosClient from '../utils/axios_client';

function Dashboard() {
  const { register, handleSubmit } = useForm();
  const [categorias, setCategorias] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [laoding, setLoading] = useState(false);
  const [estado, setEstado] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const data = await CategoriaService.getAllCategorias();
      setCategorias(data)
    }
    fetchData()
  }, [estado])

  const handleSubmitSend = async (data) => {
    const formData = new FormData();
    formData.append("imagen", data.imagen[0]);
    formData.append("nombre", data.nombre);
    await axiosClient.post("/categoria", formData);
    setEstado(!estado);
  }

  const handleFileInputChange = (event, setState) => {
    setLoading(true)
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setState(reader.result);
      setLoading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className='bg-slate-600 w-full h-screen flex gap-20 items-center justify-center'>
      <form onSubmit={handleSubmit(handleSubmitSend)}>
        <div className='flex flex-col w-96 gap-4 text-white mt-20'>
          <div className='flex flex-col gap-5 text-lg'>

            <div className='flex flex-col'>
              <label className='font-bold text-white' >Nombre</label>
              <input className='p-2 rounded-md text-black' type="text"
                {...register("nombre")}
              />
            </div>

            <div className='flex flex-col w-40 gap-2'>
              <label className='font-bold text-white' >Imagen</label>
              <input type="file"
                {...register("imagen")} onChange={(event) => handleFileInputChange(event, setImageUrl)}
              />
              {imageUrl && <img className='bg-yellow-400 rounded-md h-40' src={imageUrl} alt="Uploaded Image" />}
            </div>

          </div>
          <button type="submit" className='p-2 border rounded-md bg-blue-500 hover:bg-blue-600 text-white w-full'>Enviar</button>
        </div>
      </form>
      <Table />
    </div>
  );
}

export default Dashboard;
