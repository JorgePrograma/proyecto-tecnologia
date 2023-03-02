import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { sliderItems } from '../utils/Data/constantespruebas';

const columns = [
    { field: 'id', headerName: 'ID'},
    {
        field: 'nombre',
        headerName: 'Nombre',
    },
    {
        field: 'descripcion',
        headerName: 'Descripcion',
    }
];

const rows = sliderItems.map((item) => ({
    id: item.id, nombre: item.title, descripcion: item.desc
}))

function Carrito() {
    return (
        <div className='w-full p-2'>
            <h2 className='font-bold text-2xl text-center capitalize'>carrito de compras</h2>
            <Box className="w-96 h-96">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pimgSize={5}
                    rowsPerPimgOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        </div>
    )
}

export default Carrito
