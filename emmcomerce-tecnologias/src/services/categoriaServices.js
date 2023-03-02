import axiosClient from "../utils/axios_client"

const CategoriaService = {

    getAllCategorias: async () => {
        const response = await axiosClient.get("/categorias");
        return response.data;
    },
    createCategoria: async (categoria) => {
        console.log(categoria)
        const response = await axiosClient.post("/categoria", categoria);
        return response.data;
    },
    getCategoriasFind: async (id) => {
        const response = await axiosClient.get("/categoria", id);
        return response.data;
    },
    deleteCategoria: async (id) => {
        const response = await axiosClient.delete("/categoria", id);
        return response.data;
    },
    actualizarCategoria: async (categoria, id) => {
        const response = await axiosClient.post(`/categoria/${id}`, categoria);
        return response.data;
    }
}

export default CategoriaService;