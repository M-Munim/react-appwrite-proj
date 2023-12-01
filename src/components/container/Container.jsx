import React from 'react'


// will accecpt our properties as children
const Container = ({ children }) => {
    return (
        <div className='w-full max-w-7xl mx-auto px-4'>
            {children}
        </div>
    )
}

export default Container