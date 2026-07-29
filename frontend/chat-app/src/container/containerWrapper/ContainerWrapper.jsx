import React from 'react'
import "./ContainerWrapper.css"

const ContainerWrapper = ({ children }) => {
    return (
        <div className='container-wrapper-main'>
            {children}
        </div>
    )
}

export default ContainerWrapper