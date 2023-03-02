import React, { useState } from 'react'

function TextImagen({ }) {
    const [selectFiile, setSelectFiile] = useState();

    const handleFileInput = (event) => {
        setSelectFiile(event.target.files[0]);
    }

    return (
        <div>
            <input type="file" />
        </div>
    )
}

export default TextImagen
