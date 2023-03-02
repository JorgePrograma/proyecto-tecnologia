import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usuarioServices from '../services/usuarioServices';

function Usuarios() {
    const [dataUsuarios, setDataUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fectchUsers() {
            const data = await usuarioServices.getUsuarios();
            setDataUsuarios(data.data);
            setLoading(false)
        }
        fectchUsers()
    }, [loading])


    const handleDelete = async (id) => {
        try {
            const data = await usuarioServices.deleteUsuario(id);
            const mensaje = data;
            console.log(mensaje)
            toast.success(mensaje.messaje);
            setLoading(true)
        } catch (error) {
            console.log(error);
            toast.error("Ha ocurrido un error al eliminar el usuario");
        }
    }

    const handleUpdate = (id) => {
        alert("el id para eliminar es el id : ".concat(id));
        <Navigate to="/usuarios"/>
    }

    const columns = [
        { field: '_id', headerName: 'ID' ,  disableColumnMenu: true,},
        {
            field: 'nombreCompleto',
            headerName: 'Nombre Completo',
            width: 200,
            renderCell: (params) => (
                <>{params.row.nombre} {params.row.apellido}</>
            ), disableColumnMenu: true,
        },
        { field: 'direccion', headerName: 'Dirección', sortable: false,  disableColumnMenu: true,},
        { field: 'celular', headerName: 'Celular', sortable: false,  disableColumnMenu: true, },
        {
            field: 'opciones', headerName: 'Opciones',  sortable: false,
            renderCell: (params) => (
                <div className='flex gap-2 text-white'>
                    <button className='border p-2 rounded-full bg-blue-500' onClick={() => handleDelete(params.row._id)}>Eliminar</button>
                    <button className='border p-2 rounded-full bg-red-500' onClick={() => <Navigate to="/dashboard" replace={true} />}>Actualizar</button>
                    <ToastContainer />
                </div>
            ), disableColumnMenu: true,
        },
    ];

    return (
        <div className="flex flex-col w-full h-screen">
            <p className="font-bold text-2xl my-5">Lista de usuarios</p>
            <DataGrid
                className="w-full"
                rows={dataUsuarios}
                columns={columns}
                getRowId={(row) => row._id}
                checkboxSelection
                pageSize={10}
                disableSelectionOnClick
            />
        </div>
    );
}

export default Usuarios;
