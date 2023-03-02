const funciones = {
    errores: (error) => {
        if (error.response &&
            error.response.data &&
            error.response.data.errors) {
            const errors = error.response.data.errors;
            const errorMessages = [];
            Object.keys(errors).forEach(field => {
                errors[field].forEach(message => {
                    errorMessages.push(`${message}`);
                });
            });
            return errorMessages.join(", ");
        }
    }
}

export default funciones;