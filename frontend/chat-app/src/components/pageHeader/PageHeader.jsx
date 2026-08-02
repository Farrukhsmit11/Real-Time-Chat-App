import React from 'react'
import "./PageHeader.css"

const PageHeader = ({ rightContent, leftContent }) => {
    return (
        <div className='page-header-container'>
            <div className="page-header">
                <div className="page-header-left">
                    {leftContent}
                </div>
                <div className="page-header-right">
                    {rightContent}
                </div>
            </div>
        </div>
    )
}

export default PageHeader