import React from 'react'

function TextErrors({error}) {
    return (
        <div>
            <span className='text-base text-red-500'>{error}</span>
        </div>
    )
}

export default TextErrors
