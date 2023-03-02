import axiosClient from "../utils/axios_client"

const UsuarioService = {

    getUsuarios: async () => {
        const response = await axiosClient.get("/usuarios");
        return response.data;
    },
    createUsuario: async (usuario) => {
        const response = await axiosClient.post("/usuario", usuario);
        return response.data;
    },
    getUsuarioFind: async (id) => {
        const response = await axiosClient.get(`/usuario/${id}`);
        return response.data;
    },
    deleteUsuario: async (id) => {
        const response = await axiosClient.delete(`/usuario/${id}`);
        return response.data;
    },
    actualizarUsuario: async (usuario, id) => {
        const response = await axiosClient.post(`/usuario/${id}`, usuario);
        return response.data;
    }
}

export default UsuarioService;