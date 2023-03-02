import React from 'react'
const TextInputLabel = ({ label, type, onChange, value, placeholder, children, id, name }) => {
    return (
        <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-2'>
                <div className='text-2xl'>{children} </div>
                <label className='capitalize text-xl font-bold'>{label}</label>
            </div>
            <input
                id={id}
                name={name}
                className='rounded p-1'
                type={type}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
            />
        </div>
    )
}

export default TextInputLabel
