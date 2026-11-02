import React from 'react'
import ProductBanner from './_components/ProductBanner'
import Spinner from '@/components/Spinner'

const layout = ({ children }) => {
    return (
        <div>
            <ProductBanner />
            {children
            }</div>
    )
}

export default layout