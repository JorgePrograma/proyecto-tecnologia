import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
function ModalCustomer({ show, onClose, children }) {
    const showHiddenClassName = show ? 'block' : 'hidden'

    return (
        <div className={`${showHiddenClassName} w-screen h-screen bg-transparent flex relative justify-center items-center z-50`}>
            <section className="rounded-md bg-slate-500 relative">
                {children}
                <button className='absolute top-0 right-0 text-2xl p-1 hover:text-blue-500' onClick={onClose}><RiCloseCircleFill /></button>
            </section>
        </div>
    )
}

export default ModalCustomer
